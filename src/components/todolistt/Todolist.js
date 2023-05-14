import { React, useState,useEffect } from 'react';
import './Todolist.css';
import Add from './Add';

export default function Todolist() {
  const [x, myadd] = useState(()=>{
    const storedTasks = localStorage.getItem('anything');
    return storedTasks ? JSON.parse(storedTasks) : [];
  
  });
  useEffect(() => {
    localStorage.setItem('anything', JSON.stringify(x));
  }, [x]);
  
  const [inputvalue, setinputvalue] = useState('');

 

  const press = (event) => {
    if (event.keyCode === 13) {
      handleclick();
      setinputvalue("");
    }
  }

  const handleclick = () => {
    myadd([...x, inputvalue]);
    console.log(x);
    setinputvalue("");
  }

  const handledel = (index) => {
    const temp = [...x];
    temp.splice(index, 1);
    myadd(temp);
  }
  //

  const handlechange = (event) => {
    setinputvalue(event.target.value);
    console.log(inputvalue);
  }

 
  return (
    <>
      <div className='cont'>
        <div className='first'>
          <h1 className='heading'>ToDo List</h1>
          <div className='items'>
            <input type={'text'} id='inpt' placeholder=' Add the task' onChange={handlechange} onKeyDown={press} value={inputvalue} />
            <button type='button' className='btn' onClick={handleclick}>+</button>
          </div>
          <div className='list'>
            {x.map((data, index) => (
              <div className='cncl' key={index}>
                <button type='button' id='del' onClick={() => handledel(index)}>x</button>
                <Add array={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}