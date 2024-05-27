/* imports */
import { useRef } from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import Modal from "../Modal/Modal"
import "./Form.css"

export default function Form() {
    const {t} = useTranslation()
    const form = useRef()
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [sending, setSending] = useState(false)
    const [modal, setModal] = useState(false)

    let messageBoard = <p className="form__popup"> Merci pour votre message </p>
    let placeholderName = t("placeholderName")
    let placeholderMail = t("placeholderMail")
    let placeholderText = t("placeholderText")

    function handleSubmit(event){
        event.preventDefault()
        setSending(true)
        
        emailjs
            .sendForm("service_a4i6r7i","template_il831kr", form.current, {publicKey: "e-8Rx-vFfdBYi5oBn"})
            .then(
                ()=> {
                    console.log("success !"); 
                    setSending(false) ; 
                    setMail("") ; 
                    setName("") ; 
                    setText("") ;
                    setModal(true)
                }, 
                (error) => {console.log("failed..."), error.text}
            )    
    }

    return(
        <form ref={form} onSubmit={handleSubmit} className="form">
            <input name="from_name" className="form__name" id="from_name" type="text" value={name} onChange={(event)=> setName(event.target.value)} required placeholder={placeholderName}/>
            <input name="from_mail" className="form__mail" id="from_mail" type="mail" value={mail} onChange={(event)=> setMail(event.target.value)} required placeholder={placeholderMail} />
            <textarea className="form__text" name="message" rows={6} cols={80} placeholder={placeholderText} value={text} onChange={(event)=> setText(event.target.value)}/>
            <div>
                <button className="form__button" type="submit" disabled={sending}> {sending ? "En cours" : "Envoyer"} </button>
            </div>
            <Modal openModal={modal} closeModal={()=> setModal(false)}>
                {messageBoard}
            </Modal>
            
        </form>
    )
}