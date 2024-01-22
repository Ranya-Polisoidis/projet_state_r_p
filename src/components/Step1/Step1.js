import React from 'react'
import "./Step1.css"

function Step1() {
    return (
        <div>

            <div className='divAllStep1'>
                <div className='div1AllStep1'>
                    <h1 className='h1AllStep1'>Personal info</h1>
                    <p className='pAllStep1'>Please provide your name, email address, and phone number.</p>
                </div>
                <div className='div2AllStep1'>
                    <h5 className='h5AllStep1'>Your name is :<span></span></h5>
                    <input className='inputAllStep1' type="text" placeholder='Vingt-Six'/>
                </div>
                <div className='div2AllStep1'>
                    <h5 className='h5AllStep1'>Your email is :<span></span></h5>
                    <input className='inputAllStep1' type="text" placeholder='vingt_six@email.com'/>
                </div>
                <div className='div2AllStep1'>
                    <h5 className='h5AllStep1'>Your phone number is :<span></span></h5>
                    <input className='inputAllStep1' type="text" placeholder='e.g.+1 234 567 890'/>
                </div>
            </div>

        </div>
    )
}

export default Step1