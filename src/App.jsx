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
import { ThemeProvider } from './ThemeContext';

function App(){
  return (
    <ThemeProvider>
    <Header />
    <Hero/>
    <Moreabout />
    <Skills />
    <Projects/>
    <Contact/>
    <Socials/>
    <Scrollup/>
    <Footer/>
    </ThemeProvider>

  )
}


export default App