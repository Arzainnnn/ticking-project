import React from 'react'
import {useState} from 'react';
import './Counter.css'


function Counter() {
    const [Name,setName]=useState(0)
function Updatedname(){
  setName(Name+1)
}
function Updatedname2(){
  if(Name>0)

  setName(Name-1);


}
  return (
    <div className='cover'>
    <div className='Main'><h1 className='Counts'> {Name}</h1>
    <button className='btns'  onClick={Updatedname} >Increment</button>
    <button className='btns2' onClick={Updatedname2} >Decrement</button></div>
    </div>
  )
}

export default Counter