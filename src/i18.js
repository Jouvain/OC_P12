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
                catchphrase: "Passion, fresh perspectives and project management expertise. <br/> Let's turn our ideas into digital realities !",
                labelContact: "contact me !",
                titleProjects: "Projects", 
                titleSkills: "Skills",
                pCourse: "Want to know more <strong>about me</strong> ?",
                pCollaborate: "Want to work <strong>together</strong> ?",
                pProjects: "Want to see <strong>what i do</strong> ?",
                labelCV: "download my resume",
                labelSend: "send",
                labelProjects: "my projects",
                clickBubble: "Click a bubble !",
                bubbleA: "Needs analysis & synthesis",
                bubbleB: "restitution & presentation",
                bubbleC: "Design & development",
                bubbleD: "Project management",
                placeholderName: "Your name",
                placeholderMail: "Your mail",
                placeholderText: "Your message",
                labelDemo: "demo",
                home: "Home",
                about: "About",
                projectsLink: "Projects",
                skillsLink: "Skills",
                contactLink: "Contact me",
                errorTitle: "OH NO !",
                errorBlurb: "Nothing's here, it's a work in progress !"
            }
        },
        fr: {
            translation: {
                subheadline: "Développeur Front-End",
                catchphrase: "Passion, perspectives atypiques et expertise en gestion de projet. <br/> Transformons nos idées en réalités numériques !",
                labelContact: "contactez-moi !",
                titleProjects: "Projets", 
                titleSkills: "Savoir-faire",
                pCourse: "Envie d'en savoir plus sur <strong>mon parcours</strong> ?",
                pCollaborate: "Envie de <strong>collaborer</strong> ?",
                pProjects: "Envie de voir <strong>ce que je fais</strong> ?",
                labelCV: "téléchargez mon CV",
                labelSend: "envoyer",
                labelProjects: "mes projets",
                clickBubble: "Cliquez sur une bulle !",
                bubbleA: "Analyse & synthèse des besoins",
                bubbleB: "Restitution & présentation",
                bubbleC: "Conception & développement",
                bubbleD: "Gestion de projet",
                placeholderName: "Votre nom",
                placeholderMail: "Votre mail",
                placeholderText: "Votre message",
                labelDemo: "démo",
                home: "Accueil",
                about: "À propos",
                projectsLink: "Projets",
                skillsLink: "Savoir-faire",
                contactLink: "Me contacter",
                errorTitle: "OUPS !",
                errorBlurb: "Rien ici, c'est en chantier !"
            }
        }
    }
})

export default i18n