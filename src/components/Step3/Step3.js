import React from 'react'
import "./Step3.css"
import Input from '../Input/Input'

function Step3(props) {

    return (
        <div>

            <div className='divAllStep3'>

                <div className='div1AllStep3'>
                    <h1 className='h1AllStep3'>Pick add-ons</h1>
                    <p className='pAllStep3'>Add-ons help enhance your gaming experience.</p>
                </div>

                <div className='div2Step2'>
                {
                props.data.map((item, index) => (
                    <Input key={index} item={item} title={item.title} detail={item.detail} price={item.timeframes[props.time].price} time={props.time} input={props.input} setInput={props.setInput}/>
                ))
                }
                </div>

            </div>

        </div>
    )
}

export default Step3