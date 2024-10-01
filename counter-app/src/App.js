import React, { useState } from 'react'
import './App.css';

function App() {

  const [counter , setCounter] = useState(0);
  
  const incButton =()=>{

    setCounter(counter+1);

  }
  const decButton =()=>{

    if(counter >= 2){
      setCounter(counter-1);
    }
    
  }
  const clearButton =()=>{
    setCounter(0);
    // window.location.reload();
  }

  return (
    <div>
    <div className='container'>
      <h1>Counter App</h1>
      <div>

         <div>
          <button  onClick={clearButton}>Clear</button>
          </div> 

         <div>
            <h1>{counter}</h1>
         </div>

         <div>
          <button onClick={incButton}>PLUS</button>
          <button onClick={decButton}>MINUS</button>
         </div>


      </div>
    </div>
    </div>
  )
}

export default App