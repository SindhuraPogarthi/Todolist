import {React,useState} from 'react';
import Value from './Value';


export default function Uppercase() {
    const[x,upper]=useState('');
    const[val,change]=useState('');
    const[low,lowercase]=useState('');
    const handlechange=(event)=>
    {
        change(event.target.value);
        console.log(val);
    }
    const handleupper=(event)=>{
        upper(val.toUpperCase());
        console.log(x);
    }
    const handlelower=(event)=>{
      lowercase(val.toLowerCase());
      console.log(low);
  }


  return (
    <>
    <input type={'text'} onChange={handlechange} value={val}></input>
    <button type='button' onClick={handleupper}>Uppercase</button>
    <button type='button' onClick={handlelower}>Lowercase</button>
    <Value ch={x} mh={val} nr={low}/>
    
    </>
    
  )
}
