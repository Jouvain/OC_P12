/** imports **/

import "./Switcher.css"

export default function Switcher({label, handleClick}) {
    

    return(
       <div className="switch__container" >
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={label} id={label} />
                <label htmlFor={label} className="label" onClick={handleClick}>
                    <span className="inner"/>
                    <span className="switch"/>
                </label>         
            </div>
       </div>
    )
}