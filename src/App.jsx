import React, { useState, useEffect, useRef } from "react";


export default function OTPGenerator(){


const [otp, setOtp] = useState(null)
const [count, setCount] = useState(0)
const [isDisabled, setDisabled] = useState(false)

const handleClick = () => {
 const otp = Math.floor(100000 + Math.random() * 900000)
 setOtp(otp)
 setCount(5)
 setDisabled(true)
}

useEffect(() => {
  if(count === 0) {
    setOtp(null)
    setDisabled(false)
    return
  }
  if (count > 0) {
    const id = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(id)
  }
}, [count])

  return (
    <div className='container'>
    <h1 id="otp-title">OTP Generator</h1>
    <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {count > 0
          ? `OTP expires in ${count} seconds`
            : otp === null
              ? 'OTP expired. Click the button to generate a new OTP.'
                : ''}
</p>

      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={isDisabled}
      >
        Generate OTP
      </button>
    </div>
  )
};