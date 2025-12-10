import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Newsletter from '../components/Newsletter';


function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Newsletter/>
    </div>
  );
}

export default LandingPage;
