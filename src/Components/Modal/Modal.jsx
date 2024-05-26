/* imports utils */
import { useState, useRef, useEffect } from "react"

/* imports assets */
import cross from "../../assets/xmark-solid.svg"
import "./Modal.css"

export default function Modal({openModal, closeModal, children}) {
    const ref= useRef()
    useEffect(()=> {
        if(openModal) {
            ref.current?.showModal()
        }
        else {
            ref.current?.close()
        }
    }, [openModal])

    return(
        <dialog ref={ref} onCancel={closeModal}>
            {children}
            <button onClick={closeModal} className="modal__button"> <img src={cross} /> </button>
        </dialog>
    )
}