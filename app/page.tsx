'use client'
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import MotivationalQuotes from './components/MotivationalQuotes';
import Hobbies from './components/Hobbies';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Home = () => {
  return (
    <div >
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <Gallery /> 
      <MotivationalQuotes />
      <Hobbies /> 
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
