/* imports */
import Modal from "../Modal/Modal"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"
import github from "../../assets/github.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export default function Card({picture, name, linkGitHub, linkDemo}) {
    const [modal, setModal] = useState(false)
    let demo;
    let git;

    if (linkDemo == "#") {demo= <Link to="/*" target="_blank"> <Button label="démo" /> </Link> }
    else {demo = <a href={linkDemo} target="_blank"> <Button label="démo" /> </a> }
    if (linkGitHub == "#") {git= <Link to="/*" target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </Link>}
    else {git= <a href={linkGitHub} target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </a>   }
    
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
                {demo}
                {git}   
            </div>

        </article>
    )
}