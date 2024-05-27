/* imports */
import { Link, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production"
import { useTranslation } from "react-i18next"
import cross from "../../assets/xmark-solid.svg"
import "./Navbar.css"

export default function ({reveal, closing}) {
    const {t} = useTranslation()
    let styling
    reveal ? styling = "navbar__visible" : styling = "navbar__hidden"
    let home = t("home")
    let about = t("about")
    let projectsLink = t("projectsLink")
    let skillsLink = t("skillsLink")
    let contactLink = t("contactLink")
    return(
        <nav className={styling}>
            <div className="navbar__button" onClick={closing}> <img className="navbar__icon" src={cross} alt="a black X" /> </div>
            <ul className="navbar__list">
                <li> <HashLink className="navbar__link" to="/#top" > {home} </HashLink> </li>
                <li><NavLink className="navbar__link" to="/about"> {about} </NavLink></li>
                <li> <HashLink className="navbar__link" to="/#projects" > {projectsLink} </HashLink> </li>
                <li> <HashLink className="navbar__link" to="/#skills" > {skillsLink} </HashLink> </li>
                <li> <HashLink className="navbar__link" to="/#contact" > {contactLink} </HashLink> </li>
            </ul>
        </nav>
        
    )
}