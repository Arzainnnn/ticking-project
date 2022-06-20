import React, { useEffect } from 'react'
import './StopWatch.css'

import{useState} from 'react'

function StopWatch() {
    const[Time,setTime]=useState(0);
    const[TimerOn,setTimerOn]=useState(false);

    useEffect(()=>{
        let interval=null;
        if (TimerOn) {
            interval= setInterval(() => {
                setTime(preTime=>preTime+10)
            }, 10);
        }
        else{
                clearInterval(interval)
        }

        return()=>clearInterval(interval)

    },[TimerOn])
  return (
    <div className='Stops'>
        <div className='spansize'>
        <span>{"0" + Math.floor((Time/60000)%60)}:</span>
        <span>{"0" + Math.floor((Time/1000)%60)}:</span>
        <span>{"0" + Math.floor((Time/10)%100)}</span><br></br>
        </div>
        <div className='butons'>
        {!TimerOn && Time===0 &&(
        <button className='btn' onClick={()=> setTimerOn(true)}>Start</button>

        )}
        {TimerOn &&(
        <button className='btn' onClick={()=> setTimerOn(false)}>Stop</button>

        )}
         {!TimerOn &&(
        <button className='btn' onClick={()=> setTimerOn(true)}>Resume</button>

        )}
         {!TimerOn &&(
        <button className='btn2' onClick={()=> setTime(0)}>Reset</button>

        )}
        </div>
        </div>
  )
}

export default StopWatch