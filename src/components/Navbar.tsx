import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Mountain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'OUR VIBE', href: '#vibe' },
  { label: 'ESSENTIALS', href: '#essentials' },
  { label: 'PLAN YOUR CRUSH', href: '#featured' },
  { label: 'FREE WELCOME KIT', href: '#welcome-kit' },
  { label: 'GET IN TOUCH', href: '#footer' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/images/logo.jpeg"
            alt="TrippyCrush Logo"
            style={{
              height: '50px',
              width: '50px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '2px solid white'
            }}
          />
          <span className="logo-text">TrippyCrush</span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="book-now-btn"
            onClick={() => handleNavClick('#booking')}
          >
            BOOK NOW
          </button>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>

          <div
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="book-now-btn"
              style={{ width: '100%', marginTop: '10px' }}
              onClick={() => handleNavClick('#booking')}
            >
              BOOK NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
