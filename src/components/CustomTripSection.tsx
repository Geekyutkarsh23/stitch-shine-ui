import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Private transport and guides',
  'Curated accommodation selection',
];

export function CustomTripSection() {
  return (
    <section className="custom-trip-section" id="custom">
      <div className="cta-content">
        <motion.div 
          className="cta-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            <em>Dreaming of a <span className="underline">Unique Path?</span></em>
          </h2>
          <p>
            Can't find exactly what you're looking for? Let our expert curators 
            design a bespoke itinerary tailored just for you and your crew.
          </p>
          
          <div className="features">
            {features.map((feature, index) => (
              <motion.div 
                key={feature}
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="check">
                  <Check />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="#booking" 
            className="btn-customize"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Customizing
          </motion.a>
        </motion.div>

        <motion.div 
          className="cta-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="image-frame">
            <div style={{ 
              width: '100%', 
              height: '300px', 
              background: 'linear-gradient(180deg, #FFEEE5 0%, #FF9A7B 30%, #C4785F 70%, #3D5A6C 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '60px',
                background: '#FFF5E6',
                borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '20%',
                width: '100%',
                height: '60%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(61, 90, 108, 0.8) 100%)',
              }} />
            </div>
          </div>
          <motion.div 
            className="vibe-badge"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Your Vibe Only!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
