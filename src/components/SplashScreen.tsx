import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash screen is visible
    document.body.style.overflow = 'hidden';
    
    // Hide the splash screen after ~2.6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 2600);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#1a1d2e', // Deep dark theme background
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src="/images/logo.jpeg"
            alt="TrippyCrush"
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              marginBottom: '20px',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <motion.h1
            style={{
              fontFamily: '"Pacifico", cursive',
              fontSize: '2.5rem',
              letterSpacing: '2px',
              fontWeight: 400,
              background: 'linear-gradient(135deg, #FF6B35 0%, #00CED1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              paddingBottom: '15px',
              lineHeight: '1.3',
              display: 'inline-block'
            }}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            TrippyCrush
          </motion.h1>
          
          <motion.p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '10px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            The Vibe Only
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
