import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import SkinProtect from './components/SkinProtect';
import Prosun from './components/Prosun';
import ProductTested from './components/ProductTested';
import Aloe from './components/Aloe';
import Hydration from './components/Hydration';
import Usage from './components/Usage';
import ProductComposition from './components/ProductComposition';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Hero />
      <SkinProtect />
      <Prosun />
      <ProductTested />
      <Aloe />
      <Hydration />
      <Usage />
      <ProductComposition />
      <ContactForm />
      <Navbar />
    </div>
  );
}

export default App;
