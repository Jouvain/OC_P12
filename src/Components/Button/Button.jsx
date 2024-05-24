/* imports */
import {PropTypes} from "prop-types"
import "./Button.css"

export default function Button ({label}) {
    return(
        <p className="button"> {label} </p>
    )
}

Button.propTypes = {
    label: PropTypes.string
}
Button.defaultProps = {
    label: "bouton"
}