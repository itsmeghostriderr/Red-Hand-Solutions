import React from 'react';

function Image({
  src,
  fallbackSrc,
  alt = "Image Name",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null;
        if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        } else {
          e.currentTarget.src = "/assets/images/RHS Logo (Edited).png";
        }
      }}
      loading="lazy"
      {...props}
    />
  );
}

export default Image;
