import React, { useState } from 'react'
import "./Input.css"

function Input(props) {

    // Vu que je peu choisir ce que je veux et pouvoir tout utiliser
    // PAR CONTRE JE PEU PAS DÉSÉLECTIONNER !!
    const [divInput, setDivInput] = useState(false)

    return (

        // <div className='divInput'>
        <div className={props.choix.includes(props.item)  ? "effetDivInput" : "divInput"} onClick={() =>{props.fctAjoutChoix(props.item)}}>

        {/* Si j'aurais dû choisir qu'un éléments (comme pour le miniCard) MAIS DANS le effetDivInput (je dois mettre le css de divInput en + pour que mon effect à aussi (le css de base et qu'il ne le perde pas)) */}
        {/* <div className={props.input == props.item ? "effetDivInput" : "divInput"} onClick={()=>props.setInput(props.item)} > */}
            <div>
                <input className='inputInput' type="checkbox" checked={props.choix.includes(props.item) ? true : false} name="" id=""  />
            </div>
            <div className='div1Input'>
                <h4 className='h4Input'>{props.title}</h4>
                <p className='p1Input'>{props.detail}</p>
            </div>
            <div>
                <p className='p2Input'>+${props.price}/{props.time == "monthly" ? "mo" : "yr"}</p>
            </div>
            
        </div>
    )
}

export default Input