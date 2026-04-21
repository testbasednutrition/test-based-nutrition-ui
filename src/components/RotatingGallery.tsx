import React, { useState, useEffect } from "react";

interface RotatingGalleryProps {
  images: string[];
  interval?: number;
  className?: string;
}

const RotatingGallery = ({ images, interval = 3000, className = "" }: RotatingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-md bg-gray-100 ${className}`}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Gallery image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default RotatingGallery;
