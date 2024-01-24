import React from 'react'
import "./Step4.css"

function Step4(props) {
    return (
        <div>

            {/* Affichage suite au choix de l'étape 2 et 3 (voir en bas)  */}
            {props.miniCard !== "" &&
                <div>
                    <div className='divAllStep4'>

                        <div>
                            <h1 className='h1AllStep4'>Finishing up</h1>
                            <p className='pAllStep4'>Double-check everything looks OK before confirming.</p>
                        </div>

                        <div>
                            <div className='div1Step4'>

                                <div className='div2Step4'>
                                    <div>
                                        <h4 className='h4Step4'>{props.miniCard.title} {props.time == "monthly" ? "(Monthly)" : "(Yearly)"}</h4>
                                        {/* Pour revenir à l'étape 2 */}
                                        <p className='p1Step4' onClick={() => {props.setStep4(false); props.setStep2(true)}}>Change</p>
                                    </div>
                                    <div>
                                        <p className='p2Step4'>${props.miniCard.timeframes[props.time].price}/{props.time == "monthly" ? "mo" : "yr"}</p>
                                    </div>
                                </div>

                                <div className='divVide'>
                                    
                                </div>

                                <div>
                                    {props.choix.map((item, index) => (
                                        <div key={index} className='divFlexAllStep4 div3Step4'>
                                            <p className='p3et5Step4'>{item.title}</p>
                                            <p className='p4Step4'>+${item.timeframes[props.time].price}/{props.time == "monthly" ? "mo" : "yr"}</p>
                                        </div>
                                    ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className='divFlexAllStep4 div4Step4'>
                            <p className='p3et5Step4 pStep4'>Total {props.time == "monthly" ? "(per month)" : "(per year)"}</p>
                            <h3 className='h3Step4'>${props.miniCard.timeframes[props.time].price + props.total}/{props.time == "monthly" ? "mo" : "yr"}</h3>
                        </div>
                    </div>
                </div>

                // Si il choisi rien pour l'étape 1 et 2 (faut pouvoir lui donner accès à la suite du site tout de même)
                // Je lui est donc enlever le btn Confirm (pour qu'il ne puisse que Go Back)
            }
            {props.miniCard === "" &&

                <div className='divAllStep4 divStep4'>
                    <div>
                        <h1 className='h1AllStep4 h1Step4'>You did not make a choice in step 2 !</h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default Step4