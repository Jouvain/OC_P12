/* imports */
import { Link, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production"
import cross from "../../assets/xmark-solid.svg"
import "./Navbar.css"

export default function ({reveal, closing}) {
    let styling
    reveal ? styling = "navbar__visible" : styling = "navbar__hidden"
    return(
        <nav className={styling}>
            <div className="navbar__button" onClick={closing}> <img className="navbar__icon" src={cross} alt="a black X" /> </div>
            <ul className="navbar__list">
                <li> <HashLink className="navbar__link" to="/#top" > Accueil </HashLink> </li>
                <li><NavLink className="navbar__link" to="/about"> À propos </NavLink></li>
                <li> <HashLink className="navbar__link" to="/#projects" > Projets </HashLink> </li>
                <li> <HashLink className="navbar__link" to="/#skills" > Savoir-faire </HashLink> </li>
                <li> <HashLink className="navbar__link" to="/#contact" > Me contacter </HashLink> </li>
            </ul>
        </nav>
        
    )
}