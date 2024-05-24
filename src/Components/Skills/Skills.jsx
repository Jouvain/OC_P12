/* imports */
import { useState } from "react"
import analyse from "../../assets/magnifying-glass-chart-solid.svg"
import restitution from "../../assets/person-chalkboard-solid.svg"
import dev from "../../assets/file-code-solid.svg"
import project from "../../assets/diagram-project-solid.svg"
import "./Skills.css"

export default function Skills() {
    const [text, setText] = useState("Cliquez sur une bulle !")

    function clickA(){
        setText("Analyse & synthèse des besoins")
    }
    function clickB(){
        setText("Restitution & présentation")
    }
    function clickC(){
        setText("Conception & développement")
    }
    function clickD(){
        setText("Gestion de projet")
    }

    return(
        <div className="container">
            <div className="outline">
                <div className="mainBubble">
                    <p> {text} </p>
                </div>
            </div>
            <div className="round A">
                <img src={analyse} onClick={clickA}/>
            </div>
            <div className="round B">
                <img src={restitution} onClick={clickB}/>
            </div>
            <div className="round C">
                <img src={dev} onClick={clickC}/>
            </div>
            <div className="round D">
                <img src={project} onClick={clickD}/>
            </div>

            
        </div>
    )
}