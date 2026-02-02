import { motion } from 'framer-motion';
import { Users, Utensils, BadgeCheck, Gift } from 'lucide-react';

const vibeCards = [
  {
    icon: Users,
    iconClass: 'orange',
    iconColor: '#FF6B35',
    title: 'Mixed & Girls-Only',
    description: 'Dynamic energy of mixed groups or curated bonding of sisters-only getaways.',
  },
  {
    icon: Utensils,
    iconClass: 'pink',
    iconColor: '#FF69B4',
    title: 'Good Food for All',
    description: 'Dietary inclusions for solo travelers, girls, and foreigners. Authenticity on every plate.',
  },
  {
    icon: BadgeCheck,
    iconClass: 'teal',
    iconColor: '#00CED1',
    title: 'Why Choose Us?',
    description: 'Verified hosts, zero hidden costs, and a community that becomes family.',
  },
  {
    icon: Gift,
    iconClass: 'orange',
    iconColor: '#FF6B35',
    title: 'The Welcome Kit',
    description: 'Signature Trippy Welcome Kit—a curated selection of travel essentials and local treats.',
  },
];

export function VibeSection() {
  return (
    <section className="section vibe-section" id="vibe">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif">The Trippy Vibe</h2>
        <div className="underline" />
        <p className="subtitle font-handwritten">Travel your way!</p>
      </motion.div>

      <div className="vibe-cards">
        {vibeCards.map((card, index) => (
          <motion.div
            key={card.title}
            className="vibe-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`icon-wrapper ${card.iconClass}`}>
              <card.icon style={{ color: card.iconColor }} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
