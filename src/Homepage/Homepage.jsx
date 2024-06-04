/* imports */
import Button from "../Components/Button/Button"
import Switcher from "../Components/Switcher/Switcher"
import Toggle from "../Components/Toggle/Toggle"
import Gallery from "../Components/Gallery/Gallery"
import Carrousel from "../Components/Carrousel/Carrousel"
import Skills from "../Components/Skills/Skills"
import Form from "../Components/Form/Form"
import { keepTheme } from "../utils/theme"
import { useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"
import { useState } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { useRef } from "react"
import portrait from "../assets/portrait_pixelArtV1.svg"
import "./Homepage.css"


export default function Homepage() {
    /* object "i18n" contain translated texts, "t" function access them when called, "Switch" call the global translation with a codelang */
    const {i18n, t} = useTranslation()
    const [translation, setTranslation] = useState(true)
    let codeLang
    function switchTranslation () {
        translation ? setTranslation(false) : setTranslation(true)
        translation ? codeLang = "en" : codeLang = "fr"
        i18n.changeLanguage(codeLang)
    }

    /* "nav" = prop for Header >> Navbar for managing the hidden//visible class of the navbar  + "navRef" for escaping navbar via composedPath */
    const [nav, setNav] = useState(false)
    const navRef = useRef()
    function revealing() {
        setNav(true)
    }
    useEffect(()=> {
        document.body.addEventListener("click", (event)=> {
            if (!event.composedPath().includes(navRef.current)) {
                setNav(false)
            } 
        })
    }),[]

    /* cf "theme.js" -> apply a ".class" to the document at launch */
    useEffect(() => {
        keepTheme()
    }),[]

    return(
        <>
        <Header passedRef={navRef} navValue={nav} openingNav={revealing} closingNav={()=>{setNav(false)}} />
        <main  >

            <section className="landing" id="top" >
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
                                <img className="portrait__picture" src={portrait} alt="face of a man in pixel art" /> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="projects">
                <div className="titleSplash" >
                    <h2 className="titleSplash_head" > {t("titleProjects")} </h2>
                </div>
                <div className="homepage__gallery">
                    <Gallery translation={translation } />
                </div>
                <Carrousel />
            </section>

            <section id="skills">
                <div className="titleSplash">
                    <h2 className="titleSplash_head"> {t("titleSkills")} </h2>
                </div>
                <Skills  />
                <div className="wave__skills"></div>
                <div className="wave__skills--outline"></div>
            </section>
            
            <section id="contact">
                <div className="wave__bottom"></div>
                <div className="wave__bottom--outline"></div>
                <p className="blurb--parcours">
                <Trans i18nKey="pCourse" className="blurb--parcours" components={{strong: <strong />}} />
                </p>
                <a href="./CV.pdf" download="CV"> <Button label={t("labelCV")} /> </a>
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


