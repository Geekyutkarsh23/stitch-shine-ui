import { motion } from 'framer-motion';
import { QrCode, Heart, BookOpen } from 'lucide-react';

const passportFeatures = [
  {
    icon: QrCode,
    text: 'Digital Memories: QR codes link to your trip gallery.',
  },
  {
    icon: Heart,
    text: 'Loyalty Stamps: Earn 5% off for every 3 stamps collected.',
  },
  {
    icon: BookOpen,
    text: 'Journal Space: Dedicated sections for the journey.',
  },
];

export function PassportSection() {
  return (
    <section className="passport-section" id="passport">
      <div className="passport-content">
        <motion.div 
          className="passport-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="passport-frame">
            <div style={{
              width: '300px',
              height: '400px',
              margin: '0 auto',
              background: 'linear-gradient(145deg, #D4956B 0%, #C47F55 50%, #B56D43 100%)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '30px',
              boxShadow: '10px 0 30px rgba(0,0,0,0.3), -5px 0 20px rgba(0,0,0,0.2)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                left: '-20px',
                top: '0',
                bottom: '0',
                width: '30px',
                background: 'linear-gradient(90deg, #E8D5C4 0%, #D4C4B4 100%)',
                borderRadius: '8px 0 0 8px',
              }} />
              <span style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
                letterSpacing: '4px',
                fontWeight: '500',
              }}>PASSPORT</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="passport-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif">
            The <span className="highlight">Trippy Passport</span>
          </h2>
          <p className="description">
            More than just a souvenir. Every first-time Trippy traveler receives 
            a handcrafted physical passport to document their "Crush Moments."
          </p>

          <div className="passport-features">
            {passportFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                className="feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="icon">
                  <feature.icon />
                </div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
