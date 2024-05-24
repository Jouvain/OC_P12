/* imports */
import { useState } from "react"
import "./Form.css"

export default function Form() {
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log("test du formulaire OK")
    }

    return(
        <form method="post" onSubmit={handleSubmit} className="form">
            <input className="form__mail" id="mail" type="mail" value={mail} onChange={(event)=> setMail(event.target.value)} required placeholder="Votre adresse mail"/>
            <input className="form__name" id="name" type="text" value={name} onChange={(event)=> setName(event.target.value)} required placeholder="Votre nom complet"/>
         
            <textarea className="form__text" name="text" rows={6} cols={80} placeholder="Votre message"/>
            <div>
                <button className="form__button" type="submit"> Envoyer </button>
            </div>
            
        </form>
    )
}