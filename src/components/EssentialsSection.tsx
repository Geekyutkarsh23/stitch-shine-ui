import { motion } from 'framer-motion';
import { Backpack, Droplets, Plug, Footprints, Camera, HeartPulse } from 'lucide-react';

const essentials = [
  { icon: Backpack, label: 'Light Backpack', color: '#FF6B35' },
  { icon: Droplets, label: 'Quick-dry Towel', color: '#FF69B4' },
  { icon: Plug, label: 'Universal Adapter', color: '#00CED1' },
  { icon: Footprints, label: 'Comfy Sneakers', color: '#FF6B35' },
  { icon: Camera, label: 'Memory Cards', color: '#9B59B6' },
  { icon: HeartPulse, label: 'Basic First Aid', color: '#00CED1' },
];

export function EssentialsSection() {
  return (
    <section className="section essentials-section" id="essentials">
      <div className="section-left">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>The Essentials</h2>
          <p className="subtitle">What to Carry for your adventure</p>
        </motion.div>

        <motion.div
          className="stamp"
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 0.7, rotate: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/logo.jpeg"
            alt="Trippy Logo"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
        </motion.div>
      </div>

      <div className="essentials-grid">
        {essentials.map((item, index) => (
          <motion.div
            key={item.label}
            className="essential-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="icon-wrapper">
              <item.icon style={{ color: item.color }} />
            </div>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
