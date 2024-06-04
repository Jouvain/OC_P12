/* imports */
import { useState } from "react"
import { Trans, useTranslation } from "react-i18next"
import analyse from "../../assets/magnifying-glass-chart-solid.svg"
import restitution from "../../assets/person-chalkboard-solid.svg"
import dev from "../../assets/file-code-solid.svg"
import project from "../../assets/diagram-project-solid.svg"
import "./Skills.css"

export default function Skills() {
    const [text, setText] = useState("initial")
    const {t} = useTranslation()
    let initialText = t("clickBubble")
    let bubbleA = t("bubbleA")
    let bubbleB = t("bubbleB")
    let bubbleC = t("bubbleC")
    let bubbleD = t("bubbleD")
    let content 
    
    switch(text) {
        case "initial" :
            content = initialText
            break
        case "A" :
            content = bubbleA
            break
        case "B" :
            content = bubbleB
            break
        case "C" :
            content = bubbleC
            break
        case "D" : 
            content = bubbleD
            break
    }

    function clickA(){
        setText("A")
    }
    function clickB(){
        setText("B")
    }
    function clickC(){
        setText("C")
    }
    function clickD(){
        setText("D")
    }

    return(
        <div className="container">
            <div className="outline">
                <div className="mainBubble">
                    <p> {content} </p>
                </div>
            </div>
            <div className="round A">
                <img src={analyse} onClick={clickA} alt="a magnyfying glass" />
            </div>
            <div className="round B">
                <img src={restitution} onClick={clickB} alt="a person and a chalkboard" />
            </div>
            <div className="round C">
                <img src={dev} onClick={clickC} alt="symbol of a code ditor" />
            </div>
            <div className="round D">
                <img src={project} onClick={clickD} alt="a symbolized flowchart" />
            </div>
        </div>
    )
}