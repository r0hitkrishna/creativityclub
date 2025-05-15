
import { useEffect, useState } from 'react';

const FluidCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [position2, setPosition2] = useState({ x: -100, y: -100 }); // Start off-screen
  const [position3, setPosition3] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor effects after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Mouse move handler with different delay for each cursor
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      
      // Delayed follow for second cursor
      setTimeout(() => {
        setPosition2({ x: event.clientX, y: event.clientY });
      }, 100);
      
      // More delayed follow for third cursor
      setTimeout(() => {
        setPosition3({ x: event.clientX, y: event.clientY });
      }, 200);
    };
    
    // Touch move handler for mobile devices
    const handleTouchMove = (event: TouchEvent) => {
      setPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      
      setTimeout(() => {
        setPosition2({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      }, 100);
      
      setTimeout(() => {
        setPosition3({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      }, 200);
    };
    
    // Hide cursor effects when pointer leaves the window
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
      setPosition2({ x: -100, y: -100 });
      setPosition3({ x: -100, y: -100 });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fluid-cursor"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: position.x === -100 ? 0 : 0.8 
        }}
      />
      <div 
        className="fluid-cursor-2"
        style={{ 
          left: `${position2.x}px`, 
          top: `${position2.y}px`, 
          opacity: position2.x === -100 ? 0 : 0.6 
        }}
      />
      <div 
        className="fluid-cursor-3"
        style={{ 
          left: `${position3.x}px`, 
          top: `${position3.y}px`,
          opacity: position3.x === -100 ? 0 : 0.7 
        }}
      />
    </>
  );
};

export default FluidCursor;
