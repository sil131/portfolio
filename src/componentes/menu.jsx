import ThemeToggleButton from "./ThemeToggleButton";
import Switch from "./ThemeToggleButton";
import hamburguer from '../assets/hamburguesa.svg'

function Menu (){

  function open(){
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('ocultar');
  }
    return(
        <>
        <ul className="navigation ocultar" id="navigation">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li> 
        </ul>
       
       <div className="navigation-buttons">
          <ThemeToggleButton burguerFunction={open}/>
       </div>

        
        </>
    )
}
export default Menu ;