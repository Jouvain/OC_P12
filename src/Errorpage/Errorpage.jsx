/* import */
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router"
import "./Errorpage.css"


export default function Errorpage() {
    const {i18n, t} = useTranslation()
    const {lang} = useLocation()
    console.log(lang)
    
    if(lang) {
        i18n.changeLanguage("en")
    } else {
        i18n.changeLanguage("fr")
    }
    return(
        <main className="error__background">
            <div className="error__wave">
                <div className="error__outline"></div>
                <h1 className="error__title"> {t("errorTitle")} </h1>
                <p className="error__blurb">
                    {t("errorBlurb")}
                </p>
            </div>
        </main>
    )
}