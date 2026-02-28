import '../styles/main.scss';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { VibeSection } from '../components/VibeSection';
import { EssentialsSection } from '../components/EssentialsSection';
import { FeaturedTripSection } from '../components/FeaturedTripSection';
import { CustomTripSection } from '../components/CustomTripSection';
import { WelcomeKitSection } from '../components/WelcomeKitSection';
import { PassportSection } from '../components/PassportSection';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="trippy-app">
        <Navbar />
        <HeroSection />
        <VibeSection />
        <EssentialsSection />
        <FeaturedTripSection />
        <CustomTripSection />
        <WelcomeKitSection />
        <PassportSection />
        <BookingSection />
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default Index;
