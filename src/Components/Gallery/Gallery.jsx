/* imports */
import { useState } from "react"
import Card from "../Card/Card"
import projects from "../../utils/projects.json"
import "./Gallery.css"

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1)
    const PER_PAGE = 4
    const filteredProjects = (
        projects.filter((project, index) => {
            if( ((currentPage - 1)*PER_PAGE <= index && PER_PAGE*currentPage > index) ) {return true}
            else {return false}
        })
    )
    let pageNumber = Math.floor((filteredProjects.length || 0) / PER_PAGE) + 1;

    function newPage(n) {
        setCurrentPage(n+1)
    }

    return(
        <>
        <div className="gallery">
            {
                filteredProjects.map((project)=> {
                    return(
                        <Card key={project.id} picture={project.picture} name={project.name} linkGitHub={project.linkGitHub} linkDemo={project.linkDemo} />
                    )
                })
            }
        </div>
        <div className="pagination">
            {
                [...Array(pageNumber || 0)].map((_,n) => (
                    <button key={n} onClick={()=> newPage(n)} > {n+1} </button>
                ))
            }
        </div>
        </>
    )
}