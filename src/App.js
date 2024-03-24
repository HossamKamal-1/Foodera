import { lazy, useEffect, useRef, useState } from 'react';
import Header from './Components/Header/Header';
import HomeSection from './Components/HomeSection/HomeSection';
import Stats from './Components/Stats';
import AboutSection from './Components/AboutSection/AboutSection';
import FeatureSection from './Components/FeaturesSection/FeatureSection';
import OurStory from './Components/OurStory/OurStory';
import ExploreSection from './Components/ExploreSection/ExploreSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import FAQSection from './Components/FAQSection/FAQSection';
import ParallaxSection from './Components/ParallaxSection/ParallaxSection';
import SubscribeSection from './Components/SubscribeSection/SubscribeSection';
import Footer from './Components/Footer/Footer';
import ScrollTopButton from './Components/ScrollTopButton';
function App() {
  const [scrollTopBtnVisibility, setScrollTopBtnVisibility] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    function handleBtnVisibilityOnScroll() {
      if (window.scrollY >= 70) {
        setScrollTopBtnVisibility(true);
      } else {
        setScrollTopBtnVisibility(false);
      }
    }
    function handleHeaderShadowsOnScroll() {
      if (window.scrollY > 10) {
        headerRef.current.classList.add('shadow-lg');
      } else {
        headerRef.current.classList.remove('shadow-lg');
      }
    }
    const windowOnSrollHandler = () => {
      handleHeaderShadowsOnScroll();
      handleBtnVisibilityOnScroll();
    };
    window.addEventListener('scroll', windowOnSrollHandler);
    return () => {
      window.removeEventListener('scroll', windowOnSrollHandler);
    };
  }, []);
  return (
    <div className="App">
      <ScrollTopButton show={scrollTopBtnVisibility} />
      <Header ref={headerRef} />
      <HomeSection />
      <Stats />
      <AboutSection />
      <FeatureSection />
      <OurStory />
      <ExploreSection />
      <ReviewSection />
      <FAQSection />
      <ParallaxSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
