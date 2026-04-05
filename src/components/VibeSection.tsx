import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
    title: 'The FREE Welcome Kit',
    description: 'Signature Trippy FREE Welcome Kit—a curated selection of travel essentials and local treats.',
  },
];

function TiltCard({ card, index }: { card: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="vibe-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      <div style={{ transform: "translateZ(40px)" }}>
        <div className={`icon-wrapper ${card.iconClass}`}>
          <card.icon style={{ color: card.iconColor }} />
        </div>
        <h3 style={{ transform: "translateZ(20px)" }}>{card.title}</h3>
        <p style={{ transform: "translateZ(10px)" }}>{card.description}</p>
      </div>
    </motion.div>
  );
}

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
          <TiltCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
