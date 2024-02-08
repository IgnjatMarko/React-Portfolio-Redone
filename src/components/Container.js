import Spotlight from "./Spotlight";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


function Container() {
    return (
      <div>
        <Spotlight />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
  
export default Container;