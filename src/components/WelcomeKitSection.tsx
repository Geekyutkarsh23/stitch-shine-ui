import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Backpack, Stamp, Tag, Sparkles } from 'lucide-react';
const kitItems = [
    {
        icon: Stamp,
        emoji: '🛂',
        image: '/images/passport.jpeg',
        title: 'TrippyCrush Travel Passport',
        description: 'Your personal memory book with collectible stamps, milestones and your official TrippyCrush identity.',
    },
    {
        icon: Tag,
        emoji: '🏷',
        image: '/images/image.png',
        imageStyle: { transform: 'rotate(180deg)' },
        title: 'Branded Bag Tag',
        description: 'Travel smart with a unique TrippyCrush tag for easy identification and added safety.',
    },
    {
        icon: Sparkles,
        emoji: '✨',
        image: '/images/welcome-kit.png', // Represents the rest of the kit
        title: 'And more surprises',
        description: "Receive a Polaroid picture of yourself captured during the trip. A beautiful memory, printed instantly, to take back home with you. Because trips end… but memories stay forever ❤️",
    },
];
export function WelcomeKitSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "center center"]
    });

    const item1X = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const item1Y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const item1Rotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);
    
    const item2Y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const item2Rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
    
    const item3X = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const item3Y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const item3Rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    
    const itemOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const itemScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const transforms = [
      { x: item1X, y: item1Y, rotate: item1Rotate },
      { x: 0, y: item2Y, rotate: item2Rotate },
      { x: item3X, y: item3Y, rotate: item3Rotate },
    ];

    return (
        <section className="welcome-kit-section" id="welcome-kit" ref={sectionRef}>
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
                        <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                            <img
                                src="/images/welcome-kit-new.png"
                                alt="TrippyCrush Welcome Kit"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
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
                    <span className="kit-badge">FREE Welcome Kit</span>
                    <h2 className="kit-title">
                        The FREE <span className="highlight">TrippyCrush</span> Welcome Kit
                    </h2>
                    <p className="kit-subtitle">
                        More than a trip. An experience from day one.
                    </p>
                    <p className="kit-description">
                        Every TrippyCrush traveler receives an exclusive FREE Welcome Kit designed to make
                        your journey feel official, personal and unforgettable.
                    </p>
                    <div className="kit-items">
                        {kitItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="kit-item"
                                style={{
                                    opacity: itemOpacity,
                                    scale: itemScale,
                                    x: transforms[index]?.x || 0,
                                    y: transforms[index]?.y || 0,
                                    rotate: transforms[index]?.rotate || 0,
                                    willChange: 'transform, opacity'
                                }}
                            >
                                <div className="kit-item-icon" style={{ overflow: 'hidden', padding: item.image ? 0 : undefined }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', ...((item as any).imageStyle || {}) }} />
                                    ) : (
                                        <span>{item.emoji}</span>
                                    )}
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
