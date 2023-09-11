import { useState } from "react";

function Buttons({mood, setCurrentMood}){  
    
    function chooseMood(){
        setCurrentMood(mood)
    }

    return(
        // menus.map((el,i)=>{
        //     return(
        //     <button key={i} onClick={props.chooseMode} className="btn">{el}</button>
        //     )
        //   }) 
        <li>
            <button className="btn" onClick={chooseMood}>기분이 : {mood}</button>
        </li>
    )
}

export default Buttons