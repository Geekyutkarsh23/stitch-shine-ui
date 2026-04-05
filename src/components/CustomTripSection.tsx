import { motion } from 'framer-motion';
import { Check, Plane, Map } from 'lucide-react';

const features = [
  'Celebration trips',
  'Corporate retreats',
  'Private group trips',
];

export function CustomTripSection() {
  const whatsappMessage = encodeURIComponent(
    '"Hi I want to customize my trip"\n\nPlace:\n\nHow many people are going:\n\nHow many days:\n\nSpecial arrangements for celebration if any:'
  );
  const whatsappUrl = `https://drive.google.com/file/d/1-YggHOUtNssXBME0xuqAHBPvZfIeFBeG/view?usp=drive_link`;

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
            <em>Dreaming of a <span className="underline">Unique Path? </span></em>
          </h2>
          <p>
            Whether it's a celebration, a corporate retreat, or a private trip with your group,
            let our expert curators design a bespoke itinerary tailored just for you and your crew.
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

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-customize"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
            >
              Start Customizing
            </motion.a>
            <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              For more info contact:{' '}
              <a
                href={`https://wa.me/918448716217?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', fontWeight: 700 }}
              >
                WhatsApp
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cta-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div className="image-frame">
            <div style={{
              width: '100%',
              height: '300px',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img
                src="/images/customized.png"
                alt="TrippyCrush Custom Trips"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <motion.div
            style={{ position: 'absolute', top: '-10px', left: '-15px', color: '#ff6b35', zIndex: 10, background: 'white', padding: '8px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Plane size={24} />
          </motion.div>
          
          <motion.div
            style={{ position: 'absolute', bottom: '-15px', right: '-10px', color: '#00ced1', zIndex: 10, background: 'white', padding: '8px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <Map size={24} />
          </motion.div>

          <motion.div
            className="vibe-badge"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 10 }}
            animate={{ y: [0, -10, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { delay: 0.3, duration: 0.5 },
              rotate: { delay: 0.3, duration: 0.5 },
              y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.8 }
            }}
          >
            Your Vibe Only!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
