import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane } from 'lucide-react';
import { MagneticWrapper } from './MagneticWrapper';

export function HeroSection() {
  const { scrollY } = useScroll();
  const stampY = useTransform(scrollY, [0, 800], [0, 250]);

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
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Trips You'll{' '}
          <span className="crush" style={{ display: 'inline-block' }}>
            {"Crush".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)', rotateX: -90 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  damping: 10
                }}
                style={{ display: 'inline-block', transformOrigin: 'bottom' }}
              >
                {char}
              </motion.span>
            ))}
          </span>{' '}
          On
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
          <MagneticWrapper>
            <button
              className="btn-primary"
              onClick={() => handleScroll('#featured')}
            >
              View Upcoming Trips
            </button>
          </MagneticWrapper>
          <MagneticWrapper strength={0.15}>
            <button
              className="btn-secondary"
              onClick={() => handleScroll('#vibe')}
            >
              Explore the Vibe
            </button>
          </MagneticWrapper>
        </motion.div>
      </motion.div>

      <motion.div
        className="stamp-decoration"
        initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, rotate: 15, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring", bounce: 0.6 }}
        whileHover={{ scale: 1.1, rotate: 25 }}
        style={{ y: stampY, willChange: 'transform' }}
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
