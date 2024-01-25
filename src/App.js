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

  // Pour App.js + BtnGoBack.js + BtnNextStep.js + SideBar.js + Step 4 (pour le changer et revenir au Step2)
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [step4, setStep4] = useState(false)
  const [thankYou, setThankYou] = useState(false)

  // #####################################################################################################################################

  // -> Step 1

  // - Retranscrire ce que j'écris dans mon input dans un h5 (en directe) à chaque fois que j'écris dans l'input
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  // - Compléter les infos données dans mon tableau d'objet 

  // Avec UseEffect: cela ne modifie pas directement le fichier data.json (voir comment faire si besoin de le faire et si il ya un intérêt de le faire)
  useEffect(() => {
    // Je crée une copie du fichier data.json pour l'utiliser (sans impacter le fichiers initiale)
    const newData = { ...data };

    // Je Mets à jour les valeurs de step1 avec les nouvelles valeurs
    newData.step1[0].name = name; // step1 qui se trouve dans l'index 0 
    newData.step1[0].email = email;
    newData.step1[0].number = number;

    console.log(newData); // pour vérifier

    // Pour utiliser la nouvelle etat data (que je vient de crée) 
    // Si nécessaire (si j'ai besoin de passer ces données mises à jour à d'autres composants ou si je veux déclencher des effets supplémentaires lorsqu'elles changent)
    // Je fais:
    // setUpdatedData(newData);
    // PAS OUBLIER QUE SA IMPACTE PAS MON TABLEAU INITIALE!
  }, [name, email, number]); // Attention: je précise sur qui je fais mon useEffect ! très important
  // à chaque fois que l'une de ces variables (name, email, number) changera useEffect ce déclenche pour eux.

  // #####################################################################################################################################

  const [btnMonthlyYearly, setBtnMonthlyYearly] = useState(true) // Utiliser pour Step2.js (affichage des btns)

  // Step autre

  const [time, setTime] = useState("monthly") // LIER SURTOUT au data.json (ou je donne les infos de base de tout mes prix de mon site en mois donc je lui donne un useState en mode mois comme ça quand on va varier et qu'on prend dans le data.json en anner on le modifiera en yearly et tout) 
  // Qui d'ailleurs: SERA Utiliser dans Step2.js lorsque on clique le btn monthly ou yearly pour modifier on fais (comme si on les initialisais ensemble: mois avec useState mois au début sans rien faire puis son modifier en anner par moi puis avec la modif du mois en year (du useState existant avec le mois de base))
  // Aussi: (miniCard.js), Step3.js (aussi Input.js), Step4.js 
  const [miniCard, setMiniCard] = useState("") // Utiliser pour MiniCard.js
  // Attention !
  // JE DOIS POUVOIR FAIRE UN CHOIX DE L'UN DES PACKS 
  // SI PAS, APRÈS AU STEP4 ERREURE CAR IL ME FAUT MON CONTENUE MOIS POUR QUE L'ÉTAPE 4 FONCTIONNE 
  // DONC JE FAIS EN SORTE DE BLOQUER L'UTILISATEUR TANT QU'IL AS PAS CHOISI POUR ÇA (miniCard Je l'utilise pour Step3.js + BtnGoBack.js + BtnNextStep.js pour bloquer) ENSUITE JE LE LAISSE CONTINUER
  // je l'utilise à la fin pour le Step4.js aussi

  // Pour mon Input.js (enfant de Step3 ce trouvant dans un map) et Step 4 
  const [choix, setChoix] = useState([]) 
  const [total, setTotal] = useState(0) 

  function fctAjoutChoix(element) {
    // D'abord il passe au else vus que c'est un tableau vide puis passe au if vus qu'on va remplir le tableaux
    if (choix.includes(element)) { // une fois sélectionner si je reclique pour le desélectionner 
      setChoix(choix.filter(elementAutre => elementAutre !== element)) // je le supprime du tableau 
    } else { // pour le sélectionner 
      setChoix([...choix, element]) // je le rajoute au tableau
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
            {/* data.step1 envoyer pour tester ce que je voulais faire (voir step1.js) */}
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
            {/* } */}
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
