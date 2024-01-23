import React from 'react'
import "./MiniCard.css"

function MiniCard(props) {

    return (
        <div className='divMiniCard'>
            <img className='imgMiniCard' src={props.img}/>
            <h3 className='h3MiniCard'>{props.title}</h3>
            <p className='pMiniCard'>${props.price}/{props.time == "monthly" ? "mo" : "yr"}</p> 
        </div>
    )
}

export default MiniCard