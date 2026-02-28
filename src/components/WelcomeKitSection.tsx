import { motion } from 'framer-motion';
import { Backpack, Stamp, Tag, Sparkles } from 'lucide-react';

const kitItems = [
  {
    icon: Stamp,
    emoji: '🛂',
    title: 'TrippyCrush Travel Passport',
    description: 'Your personal memory book with collectible stamps, milestones and your official TrippyCrush identity.',
  },
  {
    icon: Tag,
    emoji: '🏷',
    title: 'Branded Bag Tag',
    description: 'Travel smart with a unique TrippyCrush tag for easy identification and added safety.',
  },
  {
    icon: Sparkles,
    emoji: '✨',
    title: 'And more surprises',
    description: 'Revealed on the trip — because the best things come unexpected.',
  },
];

export function WelcomeKitSection() {
  return (
    <section className="welcome-kit-section" id="welcome-kit">
      <div className="welcome-kit-container">
        {/* Photo space */}
        <motion.div
          className="welcome-kit-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kit-photo-frame">
            <div className="photo-placeholder">
              <Backpack className="placeholder-icon" />
              <span className="placeholder-text">Welcome Kit Photo</span>
            </div>
            <div className="frame-stamp">
              <span>🎒</span>
            </div>
          </div>
          <motion.div
            className="floating-tag"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Unbox the adventure ✈️
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="welcome-kit-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="kit-badge">Welcome Kit</span>
          <h2 className="kit-title">
            The <span className="highlight">TrippyCrush</span> Welcome Kit
          </h2>
          <p className="kit-subtitle">
            More than a trip. An experience from day one.
          </p>
          <p className="kit-description">
            Every TrippyCrush traveler receives an exclusive Welcome Kit designed to make 
            your journey feel official, personal and unforgettable.
          </p>

          <div className="kit-items">
            {kitItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="kit-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                <div className="kit-item-icon">
                  <span>{item.emoji}</span>
                </div>
                <div className="kit-item-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="kit-closing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Because with us, the experience begins before the destination. 💛
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
