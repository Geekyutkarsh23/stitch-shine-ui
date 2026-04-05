import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isClickable = target.closest('button, a, input, [role="button"], [data-clickable="true"]') || window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(!!isClickable);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: isPointer ? 'rgba(255, 107, 53, 0.1)' : 'rgba(0, 206, 209, 0.1)',
        border: isPointer ? '2px solid rgba(255, 107, 53, 0.8)' : '2px solid rgba(0, 206, 209, 0.8)',
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform'
      }}
      animate={{ 
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
}
