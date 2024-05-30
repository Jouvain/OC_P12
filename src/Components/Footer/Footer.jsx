/* imports */
import { Link } from "react-scroll"
import linkedIn from "../../assets/linkedin-in.svg"
import gitHub from "../../assets/github.svg"
import arrow from "../../assets/orb-direction.svg"
import "./Footer.css"


export default function Footer() {
    return(
        <footer className="footer">
            <div className="bubble backTop">
                <Link to="top" smooth={true} > <img src={arrow} alt="a bubble with a stylized anchor" />  </Link>
                
            </div>
            <div>
                <a href="https://www.linkedin.com/in/cyril-ferrer/" target="blank" ><img src={linkedIn}  alt="the linkedIn logo" className="footer__icon"/></a> 
                <a href="https://github.com/Jouvain" target="blank" ><img src={gitHub} alt="the github logo" className="footer__icon" /></a> 
            </div>
        </footer>
    )
}