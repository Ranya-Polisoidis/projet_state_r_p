import React from 'react'
import "./BtnGoBack.css"

function BtnGoBack(props) {
    return (
        <div>
            { props.step2 == true &&
                <button className='BtnBtnGoBack' onClick={()=> {props.setStep1(true);props.setStep2(false)}}>Go Back</button>
            }
            { props.step3 == true &&
                <button className='BtnBtnGoBack' onClick={()=> {props.setStep2(true);props.setStep3(false)}}>Go Back</button>
            }
            { props.step4 == true &&
                <button className='BtnBtnGoBack' onClick={()=> {props.setStep3(true);props.setStep4(false)}}>Go Back</button>
            }
        </div>
    )
}

export default BtnGoBack