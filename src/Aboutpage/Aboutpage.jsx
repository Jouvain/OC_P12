/* imports */
import { Trans, useTranslation  } from "react-i18next"
import arrow from "../assets/orb-direction.svg"
import Button from "../Components/Button/Button"
import portrait from "../assets/portrait_pixelArtV1.svg"

export default function Aboutpage() {
    const {t} = useTranslation()
    
    return(
        <main>
            <h1> À propos </h1>
            <section>
                <p>
                    Premiers amours contrariés avec la programmation : en parallèle de mes études en aménagement du territoire et mes engagements associatifs, 
                    je découvre, ébahi, le C++ et le Python grâce au (feu) Site du Zéro. <br/>
                    Une fois diplômé de l'université de Toulouse-II et ma vocation sur les rails, 
                    les dessous des politiques de l'habitat m'appellent. Cet aperçu du monde de l'IT restera un loisir irrégulier... 
                </p>
            </section>
            
            <section>
                <p>
                    Après m'être fait la main ici et là, je participe à divers programmes en Vendée sous la bannière de l'association Soliha.
                    Au fil du temps, les projets exaltants et les responsabilités s'accumulent : lutte contre l'habitat indigne, développement 
                    d'une offre locative "sociale", pilotage d'opérations d'amélioration de l'habitat pour le compte de collectivités, négociations
                    avec ces dernières, accompagnement des particuliers, études prospectives, gestion d'équipe...
                </p>
                <p>
                    L'économie sociale et solidaire dont se réclame Soliha étant fortement bousculée à partir de 2018, la programmation de loisir (ou plus
                    généralement la vie personnelle) passe au second plan. La modernisation et la digitalisation du travail devient alors un impératif et un 
                    formidable chantier, qui permet de renouer avec ce gout de la manipulation de données et du numérique. Mais si l'équipe continue des missions 
                    avec brio malgré le durcissement de sa condition, les désaccords avec la direction atteignent un point de non-retour. Il est alors temps de 
                    revenir à une passion plus personnelle... mais comment ?
                </p>
            </section>
            
            <section>
                <p>
                    Fin 2023, j'entame le parcours d'intégrateur web de l'école "Open Classrooms". J'y apprends les bases de la création web et manipule avec un plaisir inattendu
                    le javascript "qui peut tout faire" (orienté objet, fonctionnel, front, back...). Cette formation très "libre" est aussi exigeante. Il faut produire, lors d'une 
                    série de projets maillant les cours, telle interface ou telle fonctionnalité avec telles contraintes. Comment ? À vous de voir - et de le justifier !
                </p>
                <p>
                    Ces neuf mois d'étude - une forme de gestation - ont dopé létincelle et je cherche depuis à explorer les tréfonds du Back-end pour appréhender toute la stack. 
                    J'ai après tout toujours été un "généraliste" mené par la curiosité !
                </p>
            </section>

            <section>
                <h3> ...et maintenant ? </h3>
                <div className="bubble backTop">
                    <a href="#topAnchor"> <img src={arrow} /> </a>
                </div>
                <div>
                    <p className="blurb--collaborate">
                        <Trans i18nKey="pCollaborate" components={{strong: <strong/>}}  />
                    </p>
                    <a href="/#contact" ><Button  label={t("labelContact")} /></a>
                    <p className="blurb--parcours">
                        <Trans i18nKey="pProjects" className="blurb--parcours" components={{strong: <strong />}} />
                    </p>
                    <a href="/#projects" ><Button  label={t("labelProjects")} /></a>
                </div>
            </section>
            <section>
                <p> 
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                </p>
                <p> 
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                    Témoignange edbgejfburfygrkfbrfhdkfrnefiuerhfngerihvgfskfrierfhrkfzerfhzerfkzrfk
                    dmzekdmekepfr'pfrjelefreùfremf';fpokz'fjz"'ofjoejdfeljdzefuo'jejfroifjo'ifj"'ojo"j'
                </p>
            </section>
            
        </main>
    )
}