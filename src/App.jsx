const { useState, useEffect, useRef } = React;

export default function OTPGenerator(){


const [message, setMessage] = useState('')
const [count, setCount] = useState(0)
const [isDisabled, setDisabled] = useState(false)

useEffect(() => {
  setTimeout(() => {
   handleClick() 
  })
}, [count]) 


const handleClick = () => {
  setMessage("OTP expired. Click the button to generate a new OTP.")
  let numbers = [0,1,2,3,4,5,6,7,8,9]
  for(let i = 0; i < numbers.length; i++) {
    const generatedpassword = Math.floor(Math.random() * numbers)
  }
  return generatedpassword
}

  return (
    <div className='container'>
    <h1 id="otp-title">OTP Generator</h1>
    <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
    <p id="otp-timer" aria-live="polite">{message}</p>
    <button id="generate-otp-button">Generate OTP</button>
    </div>
  )
};