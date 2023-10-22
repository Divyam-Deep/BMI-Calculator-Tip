import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [msg, setMsg] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight == 0 || height == 0) {
      alert('Please enter a valid weight and height')
    }

    else {
      let bmi = (weight / (height * height) *10000 )
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18.5) {
        setMessage('You are underweight, need to gain (kg)')
        {let msg = ((18.5 - bmi)* (height*height) / 10000)
        setMsg(msg.toFixed(1))
        }
      } 
      
      else if (bmi >= 18.5  && bmi < 24.9) {
        setMessage('You are healthy, with perfect weight (kg)')
        { 
        setMsg(weight)
      }
      
      } else {
        setMessage('You are overweight, need to lose (kg)')
        {let msg = ((bmi - 24.9)* (height*height) / 10000) 
        setMsg(msg.toFixed(1))
      }
    }
    }
    // comment
    
  }
  
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            
        </div>
 
        <div>
          <label>Height (cm)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message} {msg} </p>
      </div>
    </div>
  </div>
  );
}
 
export default App;