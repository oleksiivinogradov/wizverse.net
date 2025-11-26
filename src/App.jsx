import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wizards from './components/Wizards';
import Guides from './components/Guides';
import Universe from './components/Universe';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Wizards />
      <Guides />
      <Universe />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
