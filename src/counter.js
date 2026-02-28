import React from 'react'
import {useState} from 'react'
import './counter.css'
const counter=()=>{
    const[count,setCount]=useState(true);
    function change(){
        setCount(!count)
        console.log(count)
    }
    return(
        <div className='counter'>
            <h1>{count?"true":"false"}</h1>
            <div className={count?"box-white":"box-dark"}>
    
            </div>
            <button onClick={change} className='btn_counter'>
                Dark/white
            </button>
            </div>
    )
}