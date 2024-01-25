import React from 'react'
import "./BtnGoBack.css"

function BtnGoBack(props) {
    return (
        <div>
            {props.step2 === true &&
                <button className='btnBtnGoBack' onClick={() => { props.setStep1(true); props.setStep2(false)}}>Go Back</button>
            }
            {props.step3 === true &&
                <button className='btnBtnGoBack' onClick={() => { props.setStep2(true); props.setStep3(false)}}>Go Back</button>
            }
            {/* de base  */}
            {/* { props.step4 == true &&
                <button className='btnBtnGoBack' onClick={()=> {props.setStep3(true);props.setStep4(false)}}>Go Back</button>
            } */}
            {/* pour mon étape 4 (comme pour mon btn Next Step) */}
            {props.step4 === true &&
                <div>
                    { props.miniCard !== "" &&
                        <div>
                            <button className='btnBtnGoBack' onClick={()=> {props.setStep3(true);props.setStep4(false)}}>Go Back</button>
                        </div>
                    }
                    { props.miniCard === "" &&
                        <div>
                            <button className='btnBtnGoBack btnBtnGoBackCibler' onClick={()=> {props.setStep3(true);props.setStep4(false)}}>Go Back</button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default BtnGoBack