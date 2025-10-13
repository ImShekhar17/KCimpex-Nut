import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import ProductRange from '../components/ProductRange';
import Vision from '../components/Vision';
import Expertise from '../components/Expertise';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import ThirdParty from '../components/ThirdParty';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import FeedbackButton from '../components/FeedbackButton';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <ProductRange />
      <Vision />
      <Expertise />
      <Industries />
      <Contact />
      <ThirdParty />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <FeedbackButton />
    </div>
  );
}
