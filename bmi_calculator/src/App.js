import React, { useState } from "react";
import "./App.css";

function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [message,setMessage] = useState(" ");
  const [bmi,setBmi] = useState(" ");

  let calcBmi =(e)=>{

    e.preventDefault();
         
    if(weight===0 || height===0)
    {
      alert("please enter a valid weight and height")
    }
    else{
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You are under weight")
      }
      else if(bmi>25 && bmi <30){
        setMessage("You are healthy weight person")   
      }
      else{
        setMessage("You are Over Weight")
      }
      
    }
    
  }
  


  let reload = () =>{
    window.location.reload();
  }
  


  return (
    <div>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input 
              type="text" 
              placeholder="Enter Weight" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input 
              type="text" 
              placeholder="Enter Weight" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
