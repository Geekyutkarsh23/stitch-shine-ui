import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Plane size={14} />
          EST. SINCE 2026
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Trips You'll <span className="crush">Crush</span> On
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Experience the world differently. We curate unique group journeys 
          that blend adventure, soulful community, and unforgettable vibes.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            className="btn-primary"
            onClick={() => handleScroll('#booking')}
          >
            View Current Bookings
          </button>
          <button 
            className="btn-secondary"
            onClick={() => handleScroll('#vibe')}
          >
            Explore the Vibe
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="stamp-decoration"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.8, rotate: 15 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <rect x="10" y="10" width="80" height="80" rx="8" fill="currentColor" />
          <text x="50" y="55" textAnchor="middle" fontSize="12" fill="rgba(0,0,0,0.5)" fontFamily="serif">
            PASSPORT
          </text>
        </svg>
      </motion.div>

      <div className="hero-scroll-indicator" />
    </section>
  );
}
