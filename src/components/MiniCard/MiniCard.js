import React from 'react'
import "./MiniCard.css"

function MiniCard(props) {

    return (
        <div>
            {/* Au clique props.item me permet de choisir un éléments et lui donner un css à lui particulirement donc si je clique sur un autre l'autre le remplacera et donc aura le css (et le précédent pas)  */}
            {/* Manière de mettre qu'une seul fois le css de base (pour pas mettre de css de base aussi dans mon effet (effetDivMiniCard) et juste apporter la modif) comme ça j'ai aussi mon css de base (l'autre manière je les mis dans SideBar.js)*/}
            <div className={`divMiniCard ${props.miniCard === props.item ? "effetDivMiniCard" : null}`} onClick={() => props.setMiniCard(props.item)}>
                <img className='imgMiniCard' src={props.img} />
                <h3 className='h3MiniCard'>{props.title}</h3>
                <p className='pMiniCard'>${props.price}/{props.time == "monthly" ? "mo" : "yr"}</p>
            </div>
        </div>
    )
}

export default MiniCard