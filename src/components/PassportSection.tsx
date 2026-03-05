import { motion } from 'framer-motion';
import { Camera, Heart, BookOpen } from 'lucide-react';

const passportFeatures = [
  {
    icon: Camera,
    text: 'Polaroid Photos: Stick your polaroid photo on the passport pages for a customized look.',
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
            <img
              src="/images/passport.jpeg"
              alt="Trippy Passport"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '10px 0 30px rgba(0,0,0,0.3), -5px 0 20px rgba(0,0,0,0.2)',
                display: 'block',
                margin: '0 auto'
              }}
            />
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
