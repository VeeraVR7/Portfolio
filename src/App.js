import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="min-h-screen bg-no-repeat bg-center bg-cover " 
                 style={{ backgroundImage: "url('/images/bgportfolio.jpg')" }}>
      <Hero/>
      </div>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
