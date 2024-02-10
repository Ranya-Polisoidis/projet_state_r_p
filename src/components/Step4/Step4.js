import React from 'react'
import "./Step4.css"

function Step4(props) {

    let totalAutre = props.miniCard.timeframes[props.time].price 
    props.choix.forEach(element => { 
        totalAutre += element.timeframes[props.time].price
    })

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
                            <p className='p1Step4' onClick={() => { props.setStep4(false); props.setStep2(true) }}>Change</p>
                        </div>
                        <div>
                            <p className='p2Step4'>${props.miniCard.timeframes[props.time].price}/{props.time === "monthly" ? "mo" : "yr"}</p>
                        </div>
                    </div>

                    <div className='divVide'>

                    </div>

                    <div>
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