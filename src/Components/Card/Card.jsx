/* imports */
import Modal from "../Modal/Modal"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"
import github from "../../assets/github.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Card.css"

export default function Card({project, translation}) {
    const {t} = useTranslation()
    const [modal, setModal] = useState(false)
    let demo;
    let git;
    let labelDemo = t("labelDemo")
    
    
    if (project.linkDemo == "#") {demo= <Link to="/*" target="_blank" state={{translation}} > <Button label={labelDemo} /> </Link> }
    else {demo = <a href={project.linkDemo} target="_blank"> <Button label={labelDemo} /> </a> }
    if (project.linkGitHub == "#") {git= <Link to="/*" target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </Link>}
    else {git= <a href={project.linkGitHub} target="_blank"> <img src={github} alt="github logo" className="card__icon"/> </a>   }
    
    function opening() {
        setModal(true)
    }

    return(
        <article className="card">
            <img 
            srcSet={project.pictureSrcSet}
            
            className="card__picture"
            src={project.picture} alt={project.pictureAlt} />
            <Modal openModal={modal} closeModal={()=> setModal(false)}>
                <div className="focus">
                    <h3 className="focus__title"> {project.name} </h3>
                    <h4 className="focus__desc"> {project.description} </h4>
                    <div className="focus__tagsContainer">
                        {
                            project.tags.map((tag, index)=> {
                                return <div key={index} className="focus__tag"> {tag} </div>
                            })
                        }
                    </div>
                    <div className="focus__colorBand"></div>
                    <div className="focus__wrapper">
                       
                        <img
                        srcSet={project.pictureSrcSet}
                        sizes={project.pictureSizes}
                        className="focus__picture" 
                        src={project.picture} alt={project.pictureAlt} />
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