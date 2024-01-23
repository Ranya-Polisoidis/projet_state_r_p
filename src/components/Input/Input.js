import React from 'react'
import "./Input.css"

function Input(props) {
    return (
        <div>

            <div>
                <div>
                    {/* <div className={`divMiniCard ${props.miniCard === props.item ? "effetDivMiniCard" : null}`} onClick={()=>props.setMiniCard(props.item)}> */}
                    <input type="checkbox" name="" id="" onClick={()=>props.setInput(props.item)}/>
                </div>
                <div>
                    <h5>{props.title}</h5>
                    <h6>{props.detail}</h6>
                </div>
                <div>
                    <p className='pMiniCard'>${props.price}/{props.time == "monthly" ? "mo" : "yr"}</p> 
                </div>
            </div>

        </div>
    )
}

export default Input