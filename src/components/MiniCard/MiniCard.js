import React from 'react'
import "./MiniCard.css"

function MiniCard(props) {

    return (
        <div>
            <div className={`divMiniCard ${props.miniCard === props.item ? "effetDivMiniCard" : null}`} onClick={() => props.setMiniCard(props.item)}>
                <img className='imgMiniCard' src={props.img} />
                <h3 className='h3MiniCard'>{props.title}</h3>
                <p className='pMiniCard'>${props.price}/{props.time === "monthly" ? "mo" : "yr"}</p>
            </div>
        </div>
    )
}

export default MiniCard