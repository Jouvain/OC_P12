/* imports */
import { NavLink } from "react-router-dom"
//import { HashLink, NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production"
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy} from "react-scroll"
import { useTranslation } from "react-i18next"
import cross from "../../assets/xmark-solid.svg"
import "./Navbar.css"

export default function ({reveal, closing, translation}) {
    const {t} = useTranslation()
    let styling
    reveal ? styling = "navbar__visible" : styling = "navbar__hidden"
    let home = t("home")
    let about = t("about")
    let projectsLink = t("projectsLink")
    let skillsLink = t("skillsLink")
    let contactLink = t("contactLink")
    let lang
    translation ? lang = "fr" : lang = "en"
    return(
        <nav className={styling}>
            <div className="navbar__button" onClick={closing}> <img className="navbar__icon" src={cross} alt="a black X" /> </div>
            <ul className="navbar__list">
                <li> <Link activeClass="active" spy={true} smooth={true} className="navbar__link" to="top" > {home} </Link> </li>
                <li> <Link activeClass="active" spy={true} smooth={true} className="navbar__link" to="projects" > {projectsLink} </Link> </li>
                <li> <Link activeClass="active" spy={true} smooth={true} className="navbar__link" to="skills" > {skillsLink} </Link> </li>
                <li> <Link activeClass="active" spy={true} smooth={true} className="navbar__link" to="contact" > {contactLink} </Link> </li>
            </ul>
        </nav>
        
    )
}

/*
<li><NavLink className="navbar__link" to="/about" state={{code:lang}} > {about} </NavLink></li>
*/