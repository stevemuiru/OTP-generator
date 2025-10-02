const { useState, useEffect, useRef } = React;

export default function OTPGenerator(){


const [otp, setOtp] = useState(null)
const [count, setCount] = useState(0)
const [isDisabled, setDisabled] = useState(false)

const handleClick = () => {
 const otp = Math.floor(100000 + Math.random() * 900000)
 setOtp(otp)
}

useEffect(() => [
  setTimeout(() => {
    handleClick()
  }, 5000),
  setCount(count + 1)
],[count])

  return (
    <div className='container'>
    <h1 id="otp-title">OTP Generator</h1>
    <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {count > 0 ? `OTP expires in ${count} seconds` : ""}
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