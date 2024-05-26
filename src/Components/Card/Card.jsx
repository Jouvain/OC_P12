/* imports */
import Modal from "../Modal/Modal"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"
import github from "../../assets/github.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export default function Card({project}) {
    const [modal, setModal] = useState(false)
    let demo;
    let git;

    if (project.linkDemo == "#") {demo= <Link to="/*" target="_blank"> <Button label="démo" /> </Link> }
    else {demo = <a href={project.linkDemo} target="_blank"> <Button label="démo" /> </a> }
    if (project.linkGitHub == "#") {git= <Link to="/*" target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </Link>}
    else {git= <a href={project.linkGitHub} target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </a>   }
    
    function opening() {
        setModal(true)
    }

    return(
        <article className="card">
            <img src={project.picture} className="card__picture" />
            <Modal openModal={modal} closeModal={()=> setModal(false)}>
                <div className="focus">
                    <h3 className="focus__title"> {project.name} </h3>
                    <p className="focus__desc"> {project.description} </p>
                    <div className="focus__tagsContainer">
                        {
                            project.tags.map((tag, index)=> {
                                return <div key={index} className="focus__tag"> {tag} </div>
                            })
                        }
                    </div>
                    <div className="focus__colorBand"></div>
                    <div className="focus__wrapper">
                       
                        <img className="focus__picture" src={project.picture} />
                    </div>
                    
                    <p className="focus__abstract"> {project.abstract} </p>
                </div>
            </Modal>

            <h3 className="card__title"> {project.name} </h3>
            <div className="card__links">
                <button className="card__button" onClick={opening}> ? </button>
                {demo}
                {git}   
            </div>

        </article>
    )
}