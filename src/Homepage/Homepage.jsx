/** import Components **/
import Button from "../Components/Button/Button"
import Switcher from "../Components/Switcher/Switcher"
import Toggle from "../Components/Toggle/Toggle"
import Gallery from "../Components/Gallery/Gallery"
import Carrousel from "../Components/Carrousel/Carrousel"
import Skills from "../Components/Skills/Skills"
import Form from "../Components/Form/Form"
import wave from "../assets/wave.svg"
import cv from "../utils/CV.pdf"
import { setTheme } from "../utils/theme"
import { keepTheme } from "../utils/theme"
import { useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"
import { useState } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"


/** import assets **/ 
import portrait from "../assets/portrait_pixelArtV1.svg"
import splash from "../assets/straitSplash.svg"

/* import styles */
import "./Homepage.css"
import i18n from "../i18"

let testIO = {
    root: null,
    rootMargin: "0px",
    treshold: 1.0
}
let observer = new IntersectionObserver(testing, testIO)




function testing () {
    console.log("IO déclenché !")
}


export default function Homepage() {
    const {i18n, t} = useTranslation()
    const [translation, setTranslation] = useState(true)
    
    let codeLang 
    let target = document.getElementById("skills")
    console.log(target)
    //observer.observe(target)
    useEffect(() => {
        keepTheme()
    }),[]

    function switchTranslation () {
        translation ? setTranslation(false) : setTranslation(true)
        translation ? codeLang = "en" : codeLang = "fr"
        i18n.changeLanguage(codeLang)
    }
    
    return(
        <>
        <Header />
        <main>
            <section className="rows landing" id="top">
                <div className="wave__top--outline"></div>
                <div className="wave__top"></div>
                <div className=" hero">
                    <div className="hero__titles">
                        <h1 className="headline" > Cyril F.Ferrer </h1>
                        <h2 className="subtitle">
                            <Trans  components={{strong: <strong/>}} > {t("subheadline")} </Trans>
                        </h2>
                    </div>
                
                    <div className="hero__content">
                        <div className="widgets">
                            <Switcher label="Langue : " handleClick={()=>switchTranslation()}/>
                            <Toggle />
                        </div>
                        <p>
                            <Trans i18nKey="catchphrase" />
                        </p>
                        <div className="hero__button">
                            <a href="#contact" ><Button  label={t("labelContact")} /></a>
                        </div>
                    </div>

                </div>
                <div className="portraitContainer">
                    <div className="portrait">
                        <div className="portrait__outline">
                            <div className="portrait__underPicture">
                                <img className="portrait__picture" src={portrait}/> 
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>
            
            <section id="projects">
                
                <div className="titleSplash" >
                    <h2 > {t("titleProjects")} </h2>
                </div>
                <div className="homepage__gallery">
                    <Gallery translation={translation } />
                </div>
               
                <Carrousel />
            </section>

            <section id="skills">
                <div className="titleSplash">
                    <h2> {t("titleSkills")} </h2>
                </div>
                
                <Skills translation={translation} />
                <div className="wave__skills"></div>
                <div className="wave__skills--outline"></div>

            </section>
            
            <section id="contact">
                <div className="wave__bottom"></div>
                <div className="wave__bottom--outline"></div>
                <p className="blurb--parcours">
                <Trans i18nKey="pCourse" className="blurb--parcours" components={{strong: <strong />}} />
                </p>
                <a href="./src/utils/CV.pdf" download="CV"> <Button label={t("labelCV")} /> </a>
                <div className="form__container">
                    <p className="blurb--collaborate">
                        <Trans i18nKey="pCollaborate" components={{strong: <strong/>}}  />
                    </p>
                    <Form />
                </div>


            </section>
        </main>
        <Footer />
        </>
    )
}


/* SVG styling for wave__bottom
                <svg viewBox="0 0 500 200" className="wave__bottom">
                    <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#50D8D7"></path>
                    <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#547AA5" opacity="1"></path>
                </svg>
*/