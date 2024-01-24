// + mon btn Confirm (le dernier)

import React from 'react'
import "./BtnNextStep.css"

function BtnNextStep(props) {
    return (
        <div>
            { props.step1 == true &&
                <button className='btnBtnNextStep' onClick={()=> {props.setStep1(false);props.setStep2(true)}}>Next Step</button>
            }
            {/* <button className='btnBtnNextStep' onClick={()=> {props.setStep1(false);props.step(true)}}>Next Step</button> */}
            { props.step2 == true &&
                <button className='btnBtnNextStep' onClick={()=> {props.setStep2(false);props.setStep3(true)}}>Next Step</button>
            }
            { props.step3 == true &&
                <button className='btnBtnNextStep' onClick={()=> {props.setStep3(false);props.setStep4(true)}}>Next Step</button>
            }
            {/* + mon btn Confirm */}
            {/* de base il est présent 1 fois car j'avais 1 affichage à l'étape 4 */}
            {/* { props.step4 == true &&
                <button className='btnBtnNextStep' onClick={()=> {props.setStep4(false);props.setThankYou(true)}}>Confirm</button>
            } */}
            {/* MAIS comme à l'étape 4 j'ai 2 affichage (au 2ème je veux qu'il ne puisse pas confirmer (car à l'occurence il avais pas fais un choix à l'étape 2 et 3)) */}
            { props.step4 == true &&
                <div>
                    { props.miniCard !== "" &&
                        <div>
                            <button className='btnBtnNextStep btnConfirmBtnNextStep' onClick={()=> {props.setStep4(false);props.setThankYou(true)}}>Confirm</button>
                        </div>
                    }
                    { props.miniCard === "" &&
                        <div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default BtnNextStep