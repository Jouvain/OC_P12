/** imports **/

/* import assets */

/* import styles */
import "./Switcher.css"

export default function Switcher({label}) {

    function handleClick(){
        console.log("test OK")
    }

    return(
       <div className="switch__container" >
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={label} id={label} />
                <label htmlFor={label} className="label">
                    <span className="inner"/>
                    <span className="switch"/>
                </label>         
            </div>
       </div>
    )
}