import React from 'react'
import "./Step2.css"

import { useState } from 'react';


import MiniCard from '../MiniCard/MiniCard'

function Step2(props) {

    // const [btnMonthlyYearly, setBtnMonthlyYearly] = useState(true)

    return (
        <div className='divAllStep2'>

            <div>
                <h1 className='h1AllStep2'>Select your plan</h1>
                <p className='pAllStep2'>You have the option of monthly or yearly billing</p>
            </div>

            <div className='div2Step2'>
                {
                    props.data.map((item, index) => (
                        <MiniCard key={index} img={item.img} title={item.title} price={item.timeframes[props.time].price} time={props.time} miniCard={props.miniCard} setMiniCard={props.setMiniCard} item={item}/>
                    ))
                }
            </div>

            {/* Bouton Month & Year */}
            <div className='div1Step2'>
                {props.btnMonthlyYearly == true &&
                    <div className="divBtnMonthYear">
                        <p className="pMonth">Monthly</p>
                        <div className="divCercle btnMonthYear">
                            <div className="cercle" onClick={() => {props.setBtnMonthlyYearly(false); props.setTime("yearly")}}></div>
                        </div>
                        <p className="pYear">Yearly</p>
                    </div>
                }

                {props.btnMonthlyYearly == false &&
                    <div className="divBtnMonthYear">
                        <p className="effetPMonth">Monthly</p>
                        <div class="divCercle btnMonthYear">
                            <div className="effetCercle" onClick={() => {props.setBtnMonthlyYearly(true); props.setTime("monthly") }}></div>
                        </div>
                        <p className="effetPYear">Yearly</p>
                    </div>
                }
            </div>


        </div>
    )
}

export default Step2