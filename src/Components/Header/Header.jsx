/* imports */
import Modal from "../Modal/Modal"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import menu from "../../assets/bars-solid.svg"
import "./Header.css"

export default function Header() {
    const [modal, setModal] = useState(false)

    function opening() {
        setModal(true)
    }

    return(
        <div>
        <Modal openModal={modal} closeModal={()=>setModal(false)} >
            <Navbar />
        </Modal>
        <img src={menu} alt="trois barres horizontales" onClick={opening} className="menu"/>
        </div>
    )
}