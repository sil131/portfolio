import Header from "./componentes/header";
import './App.css';
import Hero from "./componentes/hero";
import Moreabout from "./componentes/more-about";
import Skills from "./componentes/skills";
import Projects from "./componentes/projects";
import Contact from "./componentes/contact";
import Socials from "./componentes/socials";
import Scrollup from "./componentes/scrollup";
import Footer from "./componentes/footer";

function App(){
  return (
    <>
    <Header />
    <Hero/>
    <Moreabout />
    <Skills />
    <Projects/>
    <Contact/>
    <Socials/>
    <Scrollup/>
    <Footer/>
    </>

  )
}


export default App