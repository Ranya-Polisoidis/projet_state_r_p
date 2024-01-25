import React from 'react'
import "./Step3.css"
import Input from '../Input/Input'

function Step3(props) {

    return (

        <div>

            {/* Si il choisi rien pour Step2, je lui enleve le btn Confirm (pour qu'il ne puisse que Go Back) */}
            {/* Jusqu'a ce qu'il choisi un pack entre les 3 cards (et pas forcément les extras qui vient juste après) car si je choisi pas de pack forcément je bloque et j'ai une erreure a l'étape 4 car il nous faut du contenue */}
            {props.miniCard === "" &&

                <div className='divAllStep4 divStep4'>
                    <div>
                        <h1 className='h1AllStep4 h1Step4'>You did not make a choice in step 2 !</h1>
                    </div>
                </div>
            }
            {/* Une fois que j'ai choisi je peu continuer pour voir les extras pour ensuite avoir le Step4.js */}
            {props.miniCard !== "" &&
                <div className='divAllStep3'>

                    <div>
                        <h1 className='h1AllStep3'>Pick add-ons</h1>
                        <p className='pAllStep3'>Add-ons help enhance your gaming experience.</p>
                    </div>

                    <div>
                        {
                            props.data.map((item, index) => (
                                <Input key={index} title={item.title} detail={item.detail} price={item.timeframes[props.time].price} time={props.time} item={item} fctAjoutChoix={props.fctAjoutChoix} choix={props.choix} />
                            ))
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default Step3