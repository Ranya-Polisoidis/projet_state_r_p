import "./Input.css"

function Input(props) {

    return (
        // Si j'aurais dû choisir qu'un éléments (je fais comme pour le MiniCard.js) pas besoin de faire de fct (on prendra directement les infos pour l'étape 4)
        // Mais comme je veux pouvoir choisir ce que je veux, autant que je veux (un comme tous) donc pouvoir selectionner et déselectionner
        // Grâce à la fct fctAjoutChoix que je peu selectionner et déselectionner un item

        // ATTENTION: c'est lorsque je clique sur la div que on prend l'item -> que tout fct ! (je dois pas le mettre ailleurs car en sois il contient tout dedans DONC quand je clique dessus c'est comme si j'avais cliquer sur tout les éléments !!)
        // Pas oublier: DANS le effetDivInput (je dois mettre le css de divInput en + pour que mon effect à aussi (le css de base et qu'il ne le perde pas)) 
        <div className={props.choix.includes(props.item)  ? "effetDivInput" : "divInput"} onClick={() =>{props.fctAjoutChoix(props.item)}}>
            <div>
                {/* les balises qui on des type=... ici checkbox son activer quand on mets true et désactiver avec false (sans rien faire avant !) sans que je clique manuellement 
                DONC je relis mon clique sur la div avec le checkbox qui lui aussi s'active (sans que je clique dessus par l'intèrmédiaire de la div) sachant que quand je clique direct dans le checkbox je lui est comme enlever cette posibiliter la et remplacer par le clique de la div (le checkbox s'activera et pas autrement sinon on va pas savoir qui sèléctioner) 
                Et sa fct grâce à ma condition dans le checked */}
                <input className='inputInput' type="checkbox" checked={props.choix.includes(props.item) ? true : false} name="" id=""/>
            </div>
            <div className='div1Input'>
                <h4 className='h4Input'>{props.title}</h4>
                <p className='p1Input'>{props.detail}</p>
            </div>
            <div>
                <p className='p2Input'>+${props.price}/{props.time === "monthly" ? "mo" : "yr"}</p>
            </div>
            
        </div>
    )
}

export default Input