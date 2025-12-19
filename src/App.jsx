import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIHelpers from './components/AIHelpers';
import LearnBusiness from './components/LearnBusiness';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <AIHelpers />
        <LearnBusiness />
        <Testimonials />
        <CTASection />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
