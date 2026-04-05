import { useRef } from 'react';
import { Flame, Tent, Mountain, Map, Camera, Heart, Compass } from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

const bannerText = [
  { text: "TICKETS SELLING FAST", icon: Flame },
  { text: "CAMP UNDER THE STARS", icon: Tent },
  { text: "TRIPPY VIBES ONLY", icon: Mountain },
  { text: "FIND YOUR TRIBE", icon: Heart },
  { text: "CURATED EXPERIENCES", icon: Map },
  { text: "MEMORIES THAT LAST", icon: Camera },
  { text: "OFFBEAT EXPLORATION", icon: Compass },
];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function MarqueeBanner() {
  const baseVelocity = -1; // smooth base speed
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 16);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // We wrap seamlessly from 0 to -33.33% if we have 3 duplicate sets
  const x = useTransform(baseX, (v) => `${wrap(-33.33, 0, v)}%`);

  // Duplicating enough items to fill the 300% width cleanly
  const marqueeItems = [
    ...bannerText, ...bannerText, ...bannerText,
    ...bannerText, ...bannerText, ...bannerText,
    ...bannerText, ...bannerText, ...bannerText
  ];

  return (
    <div className="marquee-wrapper" style={{ overflow: 'hidden' }}>
      <motion.div className="marquee-content" style={{ x, display: 'flex', width: '300%', willChange: 'transform' }}>
        {marqueeItems.map((item, index) => (
          <div key={`marquee-${index}`} className="marquee-item" style={{ flexShrink: 0 }}>
            <item.icon size={18} className="marquee-icon" />
            <span>{item.text}</span>
            <span className="marquee-separator">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
