import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const Ambient3DCanvas = () => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();
  const sceneRef = useRef(null);
  const meshGroupRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Software WebGL Guard per Three.js directives
    const isSoftwareGl = (() => {
      const probe = document.createElement('canvas').getContext('webgl2');
      if (!probe) return true;
      const ext = probe.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : probe.RENDERER;
      const gpu = String(probe.getParameter(param));
      probe.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Studio Lighting Rig - Red and white highlights
    const ambientLight = new THREE.AmbientLight(isDark ? 0x111116 : 0xf0f0f5, 1.2);
    scene.add(ambientLight);

    const redRimLight = new THREE.DirectionalLight(0xdc2626, 2.5);
    redRimLight.position.set(8, 10, 6);
    scene.add(redRimLight);

    const fillLight = new THREE.PointLight(0xffffff, isDark ? 1.5 : 0.8, 40);
    fillLight.position.set(-8, -6, 10);
    scene.add(fillLight);

    const redSubtleLight = new THREE.PointLight(0xef4444, 2.0, 30);
    redSubtleLight.position.set(0, 5, 2);
    scene.add(redSubtleLight);

    // 3D Procedural Composite Group (Synapse & Selene floating geometric objects)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);
    meshGroupRef.current = masterGroup;

    // 1. Core Polyhedron with crystalline facets
    const icosaGeometry = new THREE.IcosahedronGeometry(2.4, 0);
    const icosaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1c29,
      emissive: 0x220505,
      roughness: 0.2,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, icosaMaterial);
    masterGroup.add(icosaMesh);

    // 2. Outer Wireframe Cage (accentuating technical precision & alive feel)
    const cageGeometry = new THREE.IcosahedronGeometry(2.65, 1);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    masterGroup.add(cageMesh);

    // 3. Floating Orbital Torus Ring
    const torusGeometry = new THREE.TorusGeometry(4.2, 0.04, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xff3b30,
      transparent: true,
      opacity: 0.6,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    masterGroup.add(torusMesh);

    const torusGeometry2 = new THREE.TorusGeometry(3.6, 0.02, 16, 80);
    const torusMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh2 = new THREE.Mesh(torusGeometry2, torusMaterial2);
    torusMesh2.rotation.y = Math.PI / 4;
    masterGroup.add(torusMesh2);

    // 4. Ambient Red-Tinted Particle Field (Synapse Atmosphere)
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorRed = new THREE.Color(0xdc2626);
    const colorWhite = new THREE.Color(0xffffff);
    const colorRose = new THREE.Color(0xf43f5e);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 36;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 28;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 20;

      const pick = Math.random();
      const chosenColor = pick > 0.6 ? colorRed : pick > 0.3 ? colorRose : colorWhite;
      particleColors[idx] = chosenColor.r;
      particleColors[idx + 1] = chosenColor.g;
      particleColors[idx + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.75 : 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse & Scroll Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with exponential dampening
    let frameId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      targetX = THREE.MathUtils.damp(targetX, mouseX * 1.5, 3, delta);
      targetY = THREE.MathUtils.damp(targetY, mouseY * 1.5, 3, delta);

      // Rotate 3D hero core
      if (masterGroup) {
        masterGroup.rotation.y = elapsedTime * 0.2 + targetX * 0.4;
        masterGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + targetY * 0.3;
        // Position on desktop off-center to let hero text breathe, or subtly responsive to scroll
        const scrollFactor = Math.min(scrollY / 1200, 2);
        masterGroup.position.y = -scrollFactor * 2.5 + Math.sin(elapsedTime * 0.8) * 0.2;
        masterGroup.position.x = 4.5 + Math.cos(elapsedTime * 0.6) * 0.15;
      }

      // Slow drift particles
      if (particles) {
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      icosaGeometry.dispose();
      icosaMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      torusGeometry2.dispose();
      torusMaterial2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};

export default Ambient3DCanvas;
