import { motion } from 'framer-motion';
import { Mountain, MapPin, Phone, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="logo">
            <Mountain style={{ color: 'var(--text-primary)' }} />
          </div>
          <p className="tagline font-handwritten">
            Trips you'll crush on, memories that last forever.
          </p>
          <h4>HEADQUARTERS</h4>
          <div className="address">
            <MapPin size={16} />
            <p>123 Wanderlust Lane, Suite 101<br />Bali, Indonesia 80361</p>
          </div>
        </motion.div>

        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4>LEGAL & LINKS</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Booking Details</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>GET IN TOUCH</h4>
          <div className="contact-list">
            <div className="contact-item">
              <Phone />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-item">
              <MessageCircle />
              <span>WhatsApp: +1 987 654 321</span>
            </div>
            <div className="contact-item">
              <Mail />
              <a href="mailto:hello@trippycrush.com">hello@trippycrush.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>FOLLOW THE VIBE</h4>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
          <div className="qr-code">
            <svg viewBox="0 0 60 60" fill="var(--text-muted)" style={{ width: '50px', height: '50px' }}>
              <rect x="5" y="5" width="20" height="20" rx="2" />
              <rect x="35" y="5" width="20" height="20" rx="2" />
              <rect x="5" y="35" width="20" height="20" rx="2" />
              <rect x="35" y="35" width="10" height="10" rx="1" />
              <rect x="45" y="45" width="10" height="10" rx="1" />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TRIPPYCRUSH TRAVEL. CURATING CRUSHES WORLDWIDE.</p>
        <p>DESIGNED WITH <span className="heart">❤</span> BY THE TRIPPY TEAM</p>
      </div>
    </footer>
  );
}
