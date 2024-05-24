/* imports */
import Modal from "../Modal/Modal"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"
import github from "../../assets/github.svg"
import { useState } from "react"
import "./Card.css"

export default function Card({picture, name, linkGitHub, linkDemo}) {
    const [modal, setModal] = useState(false)

    function opening() {
        setModal(true)
    }

    return(
        <article className="card">
            <img src={picture} className="card__picture" />
            <Modal openModal={modal} closeModal={()=> setModal(false)}>
                <Navbar />
            </Modal>

            <h3 className="card__title"> {name} </h3>
            <div className="card__links">
                <button className="card__button" onClick={opening}> ? </button>
                <a href={linkDemo}> <Button label="démo" /> </a>
                <a href={linkGitHub}> <img src={github} alt="github logo" className="card__icon"/> </a>      
            </div>

        </article>
    )
}