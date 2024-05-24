/* imports */
import sass from "../../assets/Sass.png"
import react from "../../assets/react.png"
import node from "../../assets/node-js.svg"
import java from "../../assets/js.png"
import html from "../../assets/html5.png"
import css from "../../assets/css3.png"
import "./Carrousel.css"

export default function Carrousel() {
    return(
       <div className="carrousel">
            <img className="carrousel__icon" src={sass} alt="Sass logo" />
            <img className="carrousel__icon" src={react} alt="React logo" />
            <img className="carrousel__icon" src={node} alt="Node.js logo" />
            <img className="carrousel__icon" src={java} alt="Javascript logo" />
            <img className="carrousel__icon" src={html} alt="HTML logo" />
            <img className="carrousel__icon" src={css} alt="CSS logo" />
       </div>
    )
}