import React from 'react'
import "./Step4.css"

function Step4(props) {


    
    return (
        <div>

            <div>
                <div className='div1AllStep4'>
                    <h1 className='h1AllStep4'>Finishing up</h1>
                    <p className='pAllStep4'>Double-check everything looks OK before confirming.</p>
                </div>

                <div>
                    <div>
                        <div>
                            <h6>{props.miniCard.title}</h6>
                            <p>{props.miniCard.timeframes[props.time].price}</p>
                        </div>



                        <div className='div2Step4'>
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


    )
}

export default Step4