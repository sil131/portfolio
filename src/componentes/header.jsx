import Logo from './logo';
import Menu from './menu';



function Header (){
    return(
      <nav className="section">
        <Logo/>
        <Menu/>
        
      </nav>
    )
}
export default Header;