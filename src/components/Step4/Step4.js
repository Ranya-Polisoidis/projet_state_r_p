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
                            <div>

                                <div>
                                    <h6>{props.miniCard.title}</h6>
                                    <p>{props.miniCard.timeframes[props.time].price}</p>
                                </div>

                                {/* <div className='div2Step4'> */}
                                <div>
                                    {props.choix.map((item, index) => (
                                        <div key={index}>
                                            <h3>{item.detail}</h3>
                                            <p>{item.timeframes[props.time].price}</p>
                                        </div>
                                    ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Total{props.miniCard.timeframes[props.time].price + props.total}</p>
                        </div>
                    </div>
                </div>

                // Si il choisi rien pour l'étape 1 et 2 (faut pouvoir lui donner accès à la suite du site tout de même)
                // Je lui est donc enlever le btn Confirm (pour qu'il ne puisse que Go Back)
            }
            {props.miniCard === "" &&

                <div className='divAllStep4 divStep4'>
                    <div>
                        <h1 className='h1AllStep4 h1Step4'>You did not make a choice in step 2 and 3 !</h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default Step4