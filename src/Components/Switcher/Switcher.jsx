/** imports **/
import french from "../../assets/french_flag.png"
import english from "../../assets/british_flag.png"
import "./Switcher.css"

export default function Switcher({label, handleClick}) {
    

    return(
       <div className="switch__container" >
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={label} id={label} />
                <label aria-label="checkbox for switching lang" htmlFor={label} className="label" onClick={handleClick}>
                    <img src={french} className="french" alt="french flag"/>
                    <img src={english} className="english" alt="british flag" />
                    <span className="inner"/>
                    <span className="switch"/>
                </label>         
            </div>
       </div>
    )
}