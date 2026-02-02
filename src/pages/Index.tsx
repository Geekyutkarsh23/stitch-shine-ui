import '../styles/main.scss';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { VibeSection } from '../components/VibeSection';
import { EssentialsSection } from '../components/EssentialsSection';
import { FeaturedTripSection } from '../components/FeaturedTripSection';
import { CustomTripSection } from '../components/CustomTripSection';
import { PassportSection } from '../components/PassportSection';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';

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
        <PassportSection />
        <BookingSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
