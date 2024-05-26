/** imports **/
import { useState } from "react"

/** import assets **/
import sun from "../../assets/sun-solid.svg"
import moon from "../../assets/moon-solid.svg"
import { setTheme } from "../../utils/theme"

/** import styles **/
import "./Toggle.css"

export default function Toggle () {
    const [toggleOn, setToggleOn] = useState(true)
    let theme =localStorage.getItem("theme")
    

    function handleClick(){
        toggleOn ? setToggleOn(false) : setToggleOn(true)
        if (theme === "theme--dark") {
            setTheme("theme--light")
        } else {
            setTheme("theme--dark")
        }
        
        
    }
    let content
    if (toggleOn) {
        content = <img src={sun} alt="a icon of sun" className="toggle__icon" onClick={handleClick}/>
    }
    else {
        content = <img src={moon} alt="a icon of sun" className="toggle__icon" onClick={handleClick}/>
    }

    return(
        <div className="toggle">
            {content}
        </div>
    )
}