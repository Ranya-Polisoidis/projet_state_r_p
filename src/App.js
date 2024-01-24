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
  
  const [btnMonthlyYearly, setBtnMonthlyYearly] = useState(true)

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

  // Step 1
  // Retranscrire ce que j'écris dans mon input dans un h5 (en directe)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  // ------------------------------------------------


  // Step autre
  const [time, setTime] = useState("monthly")
  const [miniCard, setMiniCard] = useState("")
  const [input, setInput] = useState("")

  // Pour mon Step 4 
  const [choix, setChoix] = useState([]) 
  const [total, setTotal] = useState(0) 

  // étape 3 (l'ajout des éléments dans le tableau)
  function fctAjoutChoix(element) {
    if(choix.includes(element)){
      setChoix(choix.filter(elementAutre => elementAutre !== element))
      setTotal(total-element.timeframes[time].price)
    } else {
      setChoix([...choix, element])
      setTotal(total+element.timeframes[time].price)
    }
  }

  return (
    <div className="App">

      { step1 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step1 data={data.step1} name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber}/>
            {/* { step1 == true && */}
            {/* <BtnNextStep setStep1={setStep1} setStep2={setStep2}/>  */}
            <div className='divBtnStep1App'>
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
            </div>
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
            <Step2 data={data.step2} btnMonthlyYearly={btnMonthlyYearly} setBtnMonthlyYearly={setBtnMonthlyYearly} time={time} setTime={setTime} miniCard={miniCard} setMiniCard={setMiniCard} />
            {/* ! teste éventuelle  */}
            {/* { step1 == true && */}
            <div className='divBtnStep234App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4}/>
              {/* <BtnNextStep setStep2={setStep2} setStep3={setStep3}/>  */}
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
            </div>
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
            <Step3 data={data.step3} time={time} setTime={setTime} input={input} setInput={setInput} choix={choix} fctAjoutChoix={fctAjoutChoix}/>
            <div className='divBtnStep234App divBtnStep3App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4}/>
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou}/> 
            </div>
          </div>
        </div>
      }

      { step4 == true &&
        <div className='div1AllApp'>
          <div>
            <SideBar step1={step1} step2={step2} step3={step3} step4={step4}/>
          </div>
          <div>
            <Step4 choix={choix} miniCard={miniCard} time={time} total={total} setStep4={setStep4} setStep2={setStep2}/>
            <div className='divBtnStep234App'>
              <BtnGoBack setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} miniCard={miniCard}/>
              <BtnNextStep setStep1={setStep1} setStep2={setStep2} setStep3={setStep3} setStep4={setStep4} setThankYou={setThankYou} step1={step1} step2={step2} step3={step3} step4={step4} thankYou={thankYou} miniCard={miniCard}/> {/* mon btn confirm */} 
            </div>
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

    </div>
  );
}

export default App;
