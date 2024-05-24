/** import Components **/
import Button from "../Components/Button/Button"
import Switcher from "../Components/Switcher/Switcher"
import Toggle from "../Components/Toggle/Toggle"
import Gallery from "../Components/Gallery/Gallery"
import Carrousel from "../Components/Carrousel/Carrousel"
import Skills from "../Components/Skills/Skills"
import Form from "../Components/Form/Form"
import wave from "../assets/wave.svg"


/** import assets **/ 
import portrait from "../assets/portrait_pixelArtV1.svg"
import splash from "../assets/straitSplash.svg"

/* import styles */
import "./Homepage.css"

export default function Homepage() {
    return(
        <main>
            <section className="rows landing">
                <div className="wave__top--outline"></div>
                <div className="wave__top"></div>
                <div className=" hero">
                    <div className="hero__titles">
                        <h1 className="headline" id="top"> Cyril F.Ferrer </h1>
                        <h2 className="subtitle"> Développeur Front-End </h2>
                    </div>
                
                    <div className="hero__content">
                        <div className="widgets">
                            <Switcher label="Langue : "/>
                            <Toggle />
                        </div>
                        <p>
                            (re)Converti à la création web et aux enjeux du numérique. <br/>
                            Le beau code est une passion, le digital, une solution ! 
                        </p>
                        <div className="hero__button">
                            <a href="#contact" ><Button  label="contactez-moi !" /></a>
                        </div>
                    </div>

                </div>
                <div className="portraitContainer">
                    <div className="portrait">
                        <div className="portrait__outline">
                            <img className="portrait__picture" src={portrait}/> 
                        </div>
                    </div>
                </div>

            </section>
            
            <section id="projects">
                
                <div className="titleSplash" >
                    <h2 > Projets </h2>
                </div>
                <Gallery />
                <Carrousel />
            </section>

            <section id="skills">
                <div className="titleSplash">
                    <h2> Savoir-faire </h2>
                </div>
                
                <Skills />
                
                <svg viewBox="0 0 500 200" className="wave__bottom">
                    <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#50D8D7"></path>
                    <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#547AA5" opacity="1"></path>
                </svg>
                

            </section>
            
            <section id="contact">
                <p> Envie d'en savoir plus sur mon parcours ? </p>
                <Button label="téléchargez mon CV" />
                <div className="form__container">
                    <p> Envie de collaborer ? </p>
                    <Form />
                </div>


            </section>
        </main>
    )
}