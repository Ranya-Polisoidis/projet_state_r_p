import './App.css';
import { useState } from 'react';

import SideBar from './components/SideBar/SideBar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import ThankYou from './components/ThankYou/ThankYou';
import BtnGoBack from './components/BtnGoBack/BtnGoBack';
import BtnNextStep from './components/BtnNextStep/BtnNextStep';

import data from "./data.json"

function App() {

  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [step4, setStep4] = useState(false)
  const [thankYou, setThankYou] = useState(false)


  // -------------------------------------------------------
  // const [step, setStep] = useState(false)


//   function step(e) {

//     setStep1(e.target)
//     // setStep1(false)
//   }
//   function onClickChoixV(e) {    
//     setChoixV(`${e}`)
//     console.log(e);
//     // ex: ce dont je peu faire aussi avec le target (plein d'autre)
//     // let compteur=1
//     // console.log(compteur++);
//     // e.target.style.backgroundColor="red"
//     // e.currentTarget.style.backgroundColor = "red";
// }  
// -------------------------------------------------------


  return (
    <div className="App">

      { step1 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step1/>
            {/* { step1 == true && */}
            {/* <BtnNextStep setStep1={setStep1} setStep2={setStep2}/>  */}
            <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
            {/* <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} step={step}/>  */}
            {/* } */}
          </div>
        </div>
      }

      { step2 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step2 data={data}/>
            {/* { step1 == true && */}
            <BtnGoBack/>
            {/* <BtnNextStep setStep2={setStep2} setStep3={setStep3}/>  */}
            <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
            {/* } */}
          </div>
        </div>
      }

      { step3 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step3/>
            <BtnGoBack/>
            <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
          </div>
        </div>
      }

      { step4 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step4/>
            <BtnGoBack/>
            <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
          </div>
        </div>
      }
      
      { thankYou == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <ThankYou/>
          </div>
        </div>
      }


      





        {/* <div className='divBtnNextStepApp'>
          <BtnNextStep/> 


        {/* mettre mes step 3 et 4 mais une seul fois le sideBar */}
      {/* </div> */}







      {/* <Step2/>
      <Step3/>
      <Step4/>
      <ThankYou/> */}

      {/* <BtnGoBack/>
      <BtnNextStep/> */}


    </div>
  );
}

export default App;
