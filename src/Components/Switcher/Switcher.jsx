/** imports **/
import french from "../../assets/french_flag.png"
import english from "../../assets/british_flag.png"
import "./Switcher.css"

export default function Switcher({label, handleClick}) {
    

    return(
       <div className="switch__container" >
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={label} id={label} />
                <label htmlFor={label} className="label" onClick={handleClick}>
                    <img src={french} className="french" />
                    <img src={english} className="english" />
                    <span className="inner"/>
                    <span className="switch"/>
                </label>         
            </div>
       </div>
    )
}