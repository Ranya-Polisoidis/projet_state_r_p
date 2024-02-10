import React from 'react'
import "./Step1.css"

function Step1(props) {

    return (
        <div className='divAllStep1'>

            <div>
                <h1 className='h1AllStep1'>Personal info</h1>
                <p className='pAllStep1'>Please provide your name, email address, and phone number.</p>
            </div>

            <div className='div2AllStep1'>
                <h5 className='h5AllStep1'>Your name is : {props.name}</h5>
                <input className='inputAllStep1 input1et2Step1' type="text" placeholder='Vingt-Six' value={props.name} onChange={(e) => props.setName(e.target.value)} />
            </div>
            <div className='div2AllStep1'>
                <h5 className='h5AllStep1'>Your email is : {props.email}</h5>
                <input className='inputAllStep1 input1et2Step1' type="text" placeholder='vingt_six@email.com' value={props.email} onChange={(e)=> props.setEmail(e.target.value)}/>
            </div>
            <div className='div2AllStep1'>
                <h5 className='h5AllStep1'>Your phone number is : {props.number}</h5>
                <input className='inputAllStep1' type="text" placeholder='e.g.+1 234 567 890' value={props.number} onChange={(e)=>props.setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

export default Step1