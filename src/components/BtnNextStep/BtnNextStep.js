// + mon btn Confirm (le dernier)

import React from 'react'
import "./BtnNextStep.css"

function BtnNextStep(props) {
    return (
        <div>
            { props.step1 == true &&
                <button className='BtnBtnNextStep' onClick={()=> {props.setStep1(false);props.setStep2(true)}}>Next Step</button>
            }
            {/* <button className='BtnBtnNextStep' onClick={()=> {props.setStep1(false);props.step(true)}}>Next Step</button> */}
            { props.step2 == true &&
                <button className='BtnBtnNextStep' onClick={()=> {props.setStep2(false);props.setStep3(true)}}>Next Step</button>
            }
            { props.step3 == true &&
                <button className='BtnBtnNextStep' onClick={()=> {props.setStep3(false);props.setStep4(true)}}>Next Step</button>
            }
            {/* + mon btn Confirm */}
            { props.step4 == true &&
                <button className='BtnBtnNextStep' onClick={()=> {props.setStep4(false);props.setThankYou(true)}}>Confirm</button>
            }
        </div>
    )
}

export default BtnNextStep