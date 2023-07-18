import ThemeToggleButton from "./ThemeToggleButton";
import Switch from "./ThemeToggleButton";

function Menu (){
    return(
        <>
        <ul className="navigation">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li> 
          <ThemeToggleButton />
        </ul>
       
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        
        </button>

        
        </>
    )
}
export default Menu ;