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
            <img src="/images/logo.jpeg" alt="TrippyCrush Logo" style={{ height: '50px', width: 'auto' }} />
          </div>
          <p className="tagline font-handwritten">
            Trips you'll crush on, memories that last forever.
          </p>
          <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase' }}>HEADQUARTERS</h4>
          <div className="address lobster-regular">
            <MapPin size={16} />
            <a
              href="https://maps.app.goo.gl/1xScZmnC9dW2fgZq5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              title="Click to view on Google Maps"
            >
              TrippyCrush
              <br /> Main Mandoli Road, Shahdara<br />Delhi, India 110093
            </a>
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
            <li><a href="https://drive.google.com/file/d/1wzsOcTJF0N6QwcBb9VpGwS_Ox0ZTP7Lu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Travel Essentials</a></li>
            <li><a href="https://drive.google.com/file/d/1VLyIzmpObiflEIQbM0kbohDAjZesMS96/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
            <li><a href="https://drive.google.com/file/d/1N-rFJq_Z6mRfYg46yC4zS437LzJcXJq-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Payment & Cancellation Policy</a></li>
            <li><a href="https://drive.google.com/file/d/14APeZQowwP6R7vgnhZgczesT719_t2jw/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Our Uniqueness</a></li>
            <li><a href="https://drive.google.com/file/d/1_sKsSaxBw-QDEio733lG4aLiTkCIKo3z/view?usp=drive_link" target="_blank" rel="noopener noreferrer">NOC</a></li>
            <li><a href="https://drive.google.com/file/d/1TDMESViprpnIHjRuKeFhyWmfOcFxTCan/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Travel Games</a></li>
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
              <span>
                <a href="tel:+918448716217">+91 8448716217</a> , <a href="tel:+918929155621">8929155621</a>
              </span>
            </div>
            <div className="contact-item">
              <MessageCircle />
              <span>
                WhatsApp: <a href="https://wa.me/918448716217?text=Hi,%20I%20want%20to%20enquire%20about%20TrippyCrush's%20upcoming%20trip." target="_blank" rel="noopener noreferrer">+91 8448716217</a>
              </span>
            </div>
            <div className="contact-item">
              <Mail />
              <a href="mailto:trippycrush3@gmail.com">trippycrush3@gmail.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-corporate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h4>CORPORATE EVENTS</h4>
          <div className="contact-list">
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px', lineHeight: '1.5' }}>
              For sponsorship, collaboration, or corporate events:
            </p>
            <div className="contact-item">
              <Phone />
              <span>
                <a href="tel:+918448716217">+91 8448716217</a> , <a href="tel:+918929155621">8929155621</a>
              </span>
            </div>
            <div className="contact-item">
              <Mail />
              <a href="mailto:trippycrush3@gmail.com">trippycrush3@gmail.com</a>
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
            <a href="https://www.instagram.com/trippycrush_" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/share/18Cj9RRsXW/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://wa.me/918448716217?text=Hi,%20I%20want%20to%20enquire%20about%20TrippyCrush's%20upcoming%20trip." aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <MessageCircle />
            </a>
          </div>
          <div className="qr-code">
            <img src="/images/qrcode.jpeg" alt="Follow us on Social" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TRIPPYCRUSH TRAVEL. CURATING CRUSHES WORLDWIDE.</p>
        <p>DESIGNED WITH <span className="heart">❤</span> BY THE TRIPPYCRUSH TEAM</p>
      </div>
    </footer>
  );
}
