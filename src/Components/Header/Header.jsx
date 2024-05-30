/* imports */
import Modal from "../Modal/Modal"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import menu from "../../assets/bars-solid.svg"
import "./Header.css"

export default function Header() {
    const [nav, setNav] = useState(false)
    

    function revealing() {
        setNav(true)
    }

    return(
        <header className="header">
        <img src={menu} alt="trois barres horizontales" onClick={revealing} className="menu"/>
        <Navbar reveal={nav} closing={()=> setNav(false)}/>
        </header>
    )
}

