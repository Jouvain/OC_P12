/* imports */
import Card from "../Card/Card"
import projects from "../../utils/projects.json"
import "./Gallery.css"

export default function Gallery() {
    return(
        <div className="gallery">
            {
                projects.map((project)=> {
                    return(
                        <Card key={project.id} picture={project.picture} name={project.name} linkGitHub={project.linkGitHub} linkDemo={project.linkDemo} />
                    )
                })
            }
        </div>
    )
}