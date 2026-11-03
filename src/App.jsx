import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "./context/ThemeContext";
import Ambient3DCanvas from "./components/3d/Ambient3DCanvas";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-foreground bg-background selection:bg-red-600 selection:text-white transition-colors duration-300">
        <ScrollProgress />
        <Ambient3DCanvas />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
