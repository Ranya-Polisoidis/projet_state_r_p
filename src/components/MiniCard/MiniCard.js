import React from 'react'
import "./MiniCard.css"

function MiniCard(props) {

    return (
        <div>
            {/* props.item me permet de prendre tout les éléments d'un item (et tout ce qu'il contient) ET DONC POUT LE PROJET AU CLIQUE */}

            {/* ICI: Au clique props.item me permet de choisir 1 SEUL éléments (parmis 3) dont j'utiliserais (directement les infos pour l'étape 4)  
            DONT je peu remplacer SI JE CLIQUE SUR UN AUTRE (le précédent n'est plus considérer et le nv oui)
            + Lui donner un css à lui particulirement donc si je clique sur un autre l'autre le remplacera et donc aura le css (et le précédent pas)  
            Pour le faire j'utilise un useState string vide (miniCard et setMiniCard) qui deviendra le contenue de l'itemn (voir comment je les utiliser dans le Step4.js) */}
            

            {/* Par contre si j'aurais voulu faire en sorte de prendre + de 1 ÉLÉMENTS et avoir le choix de pouvoir sélèctionner et desélèctionner (et en prendre autant que je veux)
            + lui donner un effet et pour tlm voir Input.js (enfant de Step3.js qui lui fais un map)  
            Pour le faire j'utilise un useState tableau vide (choix et setChoix) dont je vais utiliser dans ma fctAjoutChoix qui deviendra le contenue de l'item  (voir d'abord Input.js (enfant du Step3.js) puis voir comment je les utiliser dans le Step4.js) */}
            

            {/* Manière de mettre qu'une seul fois le css de base (pour pas mettre de css de base aussi dans mon effet (effetDivMiniCard) et juste apporter la modif) comme ça j'ai aussi mon css de base (l'autre manière je les mis dans SideBar.js)*/}
            <div className={`divMiniCard ${props.miniCard === props.item ? "effetDivMiniCard" : null}`} onClick={() => props.setMiniCard(props.item)}>
                <img className='imgMiniCard' src={props.img} />
                <h3 className='h3MiniCard'>{props.title}</h3>
                <p className='pMiniCard'>${props.price}/{props.time === "monthly" ? "mo" : "yr"}</p>
            </div>
        </div>
    )
}

export default MiniCard