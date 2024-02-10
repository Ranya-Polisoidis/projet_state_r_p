import React from 'react'
import "./Step4.css"

function Step4(props) {

    // JE PENSE: quand j'ai un changement d'étât type ce projet (mois/anner) à la fin il faut faire le calcule car ici il serra a jours et calculera correctement si je mets dans App.js sa me fais pas bien mon caclule (car si je revient pour modifier mes infos il ferra une erreure)
    // Sauf si par exemple j'avais un useState pour mois MAIS AUSSI QUE J'AURAIS FAIS UN POUR ANNER et la chaque éléments aura son useState et son contenue
    // Ici directement !

    // Méthode 1 
    // Calculer 
    let totalAutre = props.miniCard.timeframes[props.time].price // récupérer pour calculer pour le pack choisi
    props.choix.forEach(element => { // calculer pour mes extras choisi (ou non)
        totalAutre += element.timeframes[props.time].price
        // Qui veux dire pour rappel: totalAutre = totalAutre + element.timeframes[props.time].price;
    })

    // Méthode 2 (en une ligne qui remplace le forEach)
    // let totalAutre = props.miniCard.timeframes[props.time].price + props.choix.reduce((acc, item) => { return acc += item.timeframes[props.time].price }, 0)

    return (
        <div className='divAllStep4'>

            <div>
                <h1 className='h1AllStep4'>Finishing up</h1>
                <p className='pAllStep4'>Double-check everything looks OK before confirming.</p>
            </div>

            <div>
                <div className='div1Step4'>

                    <div className='div2Step4'>
                        <div>
                            <h4 className='h4Step4'>{props.miniCard.title} {props.time === "monthly" ? "(Monthly)" : "(Yearly)"}</h4>
                            {/* Pour revenir au Step2 */}
                            <p className='p1Step4' onClick={() => { props.setStep4(false); props.setStep2(true) }}>Change</p>
                        </div>
                        <div>
                            <p className='p2Step4'>${props.miniCard.timeframes[props.time].price}/{props.time === "monthly" ? "mo" : "yr"}</p>
                        </div>
                    </div>

                    <div className='divVide'>

                    </div>

                    <div>
                        {/* Je rappel le tableau pour voir et le mettre visuellement lier à notre fct fctAjoutChoix (c'est un panier) */}
                        {props.choix.map((item, index) => (
                            <div key={index} className='divFlexAllStep4 div3Step4'>
                                <p className='p3et5Step4'>{item.title}</p>
                                <p className='p4Step4'>+${item.timeframes[props.time].price}/{props.time === "monthly" ? "mo" : "yr"}</p>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </div>

            <div className='divFlexAllStep4 div4Step4'>
                <p className='p3et5Step4 pStep4'>Total {props.time === "monthly" ? "(per month)" : "(per year)"}</p>
                <h3 className='h3Step4'>${totalAutre}/{props.time === "monthly" ? "mo" : "yr"}</h3>
            </div>

        </div>

    )
}

export default Step4