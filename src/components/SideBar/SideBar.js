import React from 'react'
import "./SideBar.css"

function SideBar(props) {
    return (
        <div className='divSideBar'>

            <div className='divAllSideBar'>
                <div className={props.step1 == true ? "effetDivStep" : "div1AllSideBar"}>
                    <h4 className={props.step1 == true ? "effectH4Step" : "h4AllSideBar"}>1</h4>
                </div>
                <div className='div2AllSideBar'>
                    <h6 className='h6AllSideBar'>STEP 1</h6>
                    <h5 className='h5AllSideBar'>YOUR INFO</h5>
                </div>
            </div>
            <div className='divAllSideBar'>
                <div className={props.step2 == true ? "effetDivStep" : "div1AllSideBar"}>
                    <h4 className={props.step2 == true ? "effectH4Step" : "h4AllSideBar"}>2</h4>
                </div>
                <div className='div2AllSideBar'>
                    <h6 className='h6AllSideBar'>STEP 2</h6>
                    <h5 className='h5AllSideBar'>SELECT PLAN</h5>
                </div>
            </div>
            <div className='divAllSideBar'>
            <div className={props.step3 == true ? "effetDivStep" : "div1AllSideBar"}>
                    <h4 className={props.step3 == true ? "effectH4Step" : "h4AllSideBar"}>3</h4>
                </div>
                <div className='div2AllSideBar'>
                    <h6 className='h6AllSideBar'>STEP 3</h6>
                    <h5 className='h5AllSideBar'>ADD-ONS</h5>
                </div>
            </div>
            <div className='divAllSideBar'>
            <div className={props.step4 == true ? "effetDivStep" : "div1AllSideBar"}>
                    <h4 className={props.step4 == true ? "effectH4Step" : "h4AllSideBar"}>4</h4>
                </div>
                <div className='div2AllSideBar'>
                    <h6 className='h6AllSideBar'>STEP 4</h6>
                    <h5 className='h5AllSideBar'>SUMMARY</h5>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar