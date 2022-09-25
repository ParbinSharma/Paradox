import logo from './images/LOGO.png';
import {Link} from 'react-router-dom';

export default function Navbar(){
  return(
<nav className="navbar navbar-dark bg-*">
<img className="logo" alt='Paradox' src={logo}/>
<div className="navbar-link">
<li className="links"><Link className="links" to="/marvel">Marvel</Link></li>
<li className="links"><Link className="links" to="/dc">DC</Link></li>
<li className="links"><Link className="links" to="/sci-fi">Sci-Fi</Link></li>
</div>
</nav>
    );
}