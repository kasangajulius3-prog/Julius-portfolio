import portrait from "./assets/portrait.webp";
import useScrollReveal from "./hooks/useScrollReveal";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Exploring from "./components/Exploring";
import Education from "./components/Education";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/responsive.css";

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <BackgroundVideo />
      <Navbar />
      <main id="main">
        <Hero portrait={portrait} />
        <About />
        <Skills />
        <Exploring />
        <Projects />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
