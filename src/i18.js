import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "fr",
    fallbackLng : "fr",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation : {
                subheadline: "Front-End Developer",
                catchphrase: "Converted to web creation. <br/> The beauty of coding is a pleasure, the digital service is an answer !",
                labelContact: "contact me !",
                titleProjects: "Projects", 
                titleSkills: "Skills",
                pCourse: "Want to know more <strong>about me</strong> ?",
                pCollaborate: "Want to work <strong>together</strong> ?",
                labelCV: "download my resume",
                labelSend: "send",
                clickBubble: "Click a bubble !",
                bubbleA: "Needs analysis & synthesis",
                bubbleB: "restitution & presentation",
                bubbleC: "Design & development",
                bubbleD: "Project management"
            }
        },
        fr: {
            translation: {
                subheadline: "Développeur Front-End",
                catchphrase: "(re)Converti à la création web et aux enjeux du numérique. <br/> Le beau code est une passion, le digital, une solution !",
                labelContact: "contactez-moi !",
                titleProjects: "Projets", 
                titleSkills: "Savoir-faire",
                pCourse: "Envie d'en savoir plus sur <strong>mon parcours</strong> ?",
                pCollaborate: "Envie de <strong>collaborer</strong> ?",
                labelCV: "téléchargez mon CV",
                labelSend: "envoyer",
                clickBubble: "Cliquez sur une bulle !",
                bubbleA: "Analyse & synthèse des besoins",
                bubbleB: "Restitution & présentation",
                bubbleC: "Conception & développement",
                bubbleD: "Gestion de projet"
            }
        }
    }
})

export default i18n