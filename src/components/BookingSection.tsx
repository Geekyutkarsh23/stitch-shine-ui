import { motion } from 'framer-motion';
import { Sparkles, CheckSquare } from 'lucide-react';

const bookingSteps = [
  {
    icon: Sparkles,
    iconColor: '#FF6B35',
    title: 'Step 1: Registration',
    description: 'Fill out our traveler profile form to help us personalize your experience.',
    buttonText: 'Google Form Link',
    buttonClass: '',
    link: 'https://forms.gle/ZxzCRbjswB7GyPaR7',
  },
  {
    icon: CheckSquare,
    iconColor: '#FF69B4',
    title: 'Step 2: NOC Form',
    description: 'Submit your No Objection Certificate for smooth travel processing.',
    buttonText: 'Download NOC',
    buttonClass: 'secondary',
    link: 'https://drive.google.com/file/d/1_sKsSaxBw-QDEio733lG4aLiTkCIKo3z/view?usp=drive_link',
  },
];

export function BookingSection() {
  return (
    <section className="section booking-section" id="booking">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Secure Your Spot</h2>
        <p>Spaces are limited to maintain the vibe.</p>
      </motion.div>

      <div className="booking-steps">
        {bookingSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className="booking-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="step-icon">
              <step.icon style={{ color: step.iconColor }} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <motion.a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`step-btn ${step.buttonClass}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {step.buttonText}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
