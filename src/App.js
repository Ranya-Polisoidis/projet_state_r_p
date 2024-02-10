import './App.css';
import { useState, useEffect } from 'react';

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

  // #####################################################################################################################################

  // -> Step 1

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")


  useEffect(() => {
    const newData = { ...data };

    newData.step1[0].name = name; 
    newData.step1[0].email = email;
    newData.step1[0].number = number;

    console.log(newData); 

  }, [name, email, number]); 

  // #####################################################################################################################################

  const [btnMonthlyYearly, setBtnMonthlyYearly] = useState(true) 

  // Step autre

  const [time, setTime] = useState("monthly") 
  
  const [miniCard, setMiniCard] = useState("") 

  const [choix, setChoix] = useState([]) 
  const [total, setTotal] = useState(0) 

  function fctAjoutChoix(element) {
    if (choix.includes(element)) { 
      setChoix(choix.filter(elementAutre => elementAutre !== element)) 
    } else { 
      setChoix([...choix, element]) 
    }
  }

  return (
    <div className="App">

      {step1 === true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4} />
          </div>
          <div>
            <Step1 data={data.step1} name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} />
            <div className='divBtnStep1App'>
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou} />
            </div>
          </div>
        </div>
      }

      {step2 === true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4} />
          </div>
          <div>
            <Step2 data={data.step2} btnMonthlyYearly={btnMonthlyYearly} setBtnMonthlyYearly={setBtnMonthlyYearly} time={time} setTime={setTime} miniCard={miniCard} setMiniCard={setMiniCard} />
            <div className='divBtnStep234App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} />
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou} />
            </div>
          </div>
        </div>
      }

      {step3 === true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4} />
          </div>
          <div>
            <Step3 data={data.step3} time={time} setTime={setTime} miniCard={miniCard} choix={choix} fctAjoutChoix={fctAjoutChoix}/>
            <div className='divBtnStep234App divBtnStep3App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} />
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou} miniCard={miniCard}/>
            </div>
          </div>
        </div>
      }

      {step4 === true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4} />
          </div>
          <div>
            <Step4 time={time} miniCard={miniCard} choix={choix} total={total} setStep4={setStep4} setStep2={setStep2} />
            <div className='divBtnStep234App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} miniCard={miniCard} />
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> {/* mon btn confirm */}
            </div>
          </div>
        </div>
      }

      {thankYou === true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4} />
          </div>
          <div>
            <ThankYou/>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
