import '../styles/main.scss';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { VibeSection } from '../components/VibeSection';
import { EssentialsSection } from '../components/EssentialsSection';
import { FeaturedTripSection } from '../components/FeaturedTripSection';
import { CustomTripSection } from '../components/CustomTripSection';
import { WelcomeKitSection } from '../components/WelcomeKitSection';
import { PassportSection } from '../components/PassportSection';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';
import { ScrollToTop } from '../components/ScrollToTop';
import { CustomCursor } from '../components/CustomCursor';
import { SplashScreen } from '../components/SplashScreen';

const Index = () => {
  return (
    <ThemeProvider>
      <SplashScreen />
      <main className="trippy-app">
        <Navbar />
        <HeroSection />
        <MarqueeBanner />
        <VibeSection />
        <EssentialsSection />
        <FeaturedTripSection />
        <CustomTripSection />
        <WelcomeKitSection />
        <PassportSection />
        <BookingSection />
        <Footer />
        <ChatBot />
        <ScrollToTop />
        <CustomCursor />
      </main>
    </ThemeProvider>
  );
};

export default Index;
