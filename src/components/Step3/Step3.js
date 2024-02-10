import React from 'react'
import "./Step3.css"
import Input from '../Input/Input'

function Step3(props) {

    return (

        <div>

            {props.miniCard === "" &&

                <div className='divAllStep4 divStep4'>
                    <div>
                        <h1 className='h1AllStep4 h1Step4'>You did not make a choice in step 2 !</h1>
                    </div>
                </div>
            }
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