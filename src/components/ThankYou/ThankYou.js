import React from 'react'
import "./ThankYou.css"

import iconeThankYou from "../../assets/img/thankyou.svg"

function ThankYou() {
    return (
        
        <div className='divThankYou'>
            <img className='imgThankYou' src={iconeThankYou} alt="icone thank you" />
            <h1 className='h1ThankYou'>Thank You!</h1>
            <p className='pThankYou'>Thank for confirming your ! We hope you have fun using our . If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default ThankYou