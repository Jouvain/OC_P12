/* imports */
import Modal from "../Modal/Modal"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import menu from "../../assets/bars-solid.svg"
import "./Header.css"

export default function Header({passedRef, navValue, closingNav, openingNav}) {
    
    

   

    return(
        <header className="header">
        <img ref={passedRef} src={menu} alt="trois barres horizontales" onClick={openingNav} className="menu"/>
        <Navbar reveal={navValue} closing={closingNav}/>
        </header>
    )
}

