import "./Input.css"

function Input(props) {

    return (
        <div className={props.choix.includes(props.item)  ? "effetDivInput" : "divInput"} onClick={() =>{props.fctAjoutChoix(props.item)}}>
            <div>
                <input className='inputInput' type="checkbox" checked={props.choix.includes(props.item) ? true : false} name="" id=""/>
            </div>
            <div className='div1Input'>
                <h4 className='h4Input'>{props.title}</h4>
                <p className='p1Input'>{props.detail}</p>
            </div>
            <div>
                <p className='p2Input'>+${props.price}/{props.time === "monthly" ? "mo" : "yr"}</p>
            </div>
            
        </div>
    )
}

export default Input