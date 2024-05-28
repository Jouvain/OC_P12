/* imports */
import logos from "../../utils/logos.json"
import "./Carrousel.css"

export default function Carrousel() {
    return(
       <div className="carrousel">
            <div className="carrousel__autoplay">
                {logos.map((logo)=> {
                    return(
                        <img key={logo.id} src={logo.logo} alt={logo.desc} className="carrousel__icon" />
                    )
                })}
            </div>

       </div>
    )
}