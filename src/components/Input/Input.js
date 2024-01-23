import React from 'react'
import "./Input.css"

function Input(props) {
    return (
        <div>

            <div className='divInput'>
                <div>
                    {/* <div className={`divMiniCard ${props.miniCard === props.item ? "effetDivMiniCard" : null}`} onClick={()=>props.setMiniCard(props.item)}> */}
                    <input className='inputInput' type="checkbox" name="" id="" onClick={()=>props.fctAjoutChoix(props.item)}/>
                </div>
                <div>
                    <h5 className='h5Input'>{props.title}</h5>
                    <h6 className='h6Input'>{props.detail}</h6>
                </div>
                <div>
                    <p className='pMiniCard'>${props.price}/{props.time == "monthly" ? "mo" : "yr"}</p> 
                </div>
            </div>

        </div>
    )
}

export default Input