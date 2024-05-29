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

/* VERSION AVEC MODALE
    const [modal, setModal] = useState(false)

    function opening() {
        setModal(true)
    }rev
        <Modal openModal={modal} closeModal={()=>setModal(false)} >
            <Navbar />
        </Modal>
*/