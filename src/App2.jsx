import React, { useState } from 'react'

const App2 = () => {

   const [calc, setCalc] = useState('');
   const [zero, setZero] = useState('0')

   const ops = ['-', '/', '+', '*', '.']

   const updateDigits = (value) => {
     if(value === '0' && !calc) return

      if(
         ops.includes(value) && calc === '' ||
         ops.includes(value) && ops.includes(calc.slice(-1))
        ) return

      setCalc(calc + value)
   }

   const getDigits = () => {
      let digits = [];

      for(let i = 1; i < 10; i++) {
         digits.push(
            <button
              key={i}
              onClick={() => updateDigits(i.toString())}
            >
               {i}
            </button>
         )
      }

      return digits
   }

   const calculate = () => {
      setCalc(eval(calc).toString())
   }

   const deleteLast = () => {
      setCalc(calc.slice(0,-1))
   }

   const clearDigits = () => {
      setCalc('')
   }

  return (
    <div className='App'>
      <div className="calculator">
         <div className="display">
            {calc || zero}
         </div>

         <div className="operators">
            <button onClick={() => updateDigits('/')}>/</button>
            <button onClick={() => updateDigits('*')}>*</button>
            <button onClick={() => updateDigits('+')}>+</button>
            <button onClick={() => updateDigits('-')}>-</button>
            <button onClick={() => updateDigits('.')}>.</button>

            <button onClick={calculate}>=</button>
            <button onClick={deleteLast}>DEL</button>

            <button onClick={clearDigits}>CLEAR</button>
         </div>



         <div className="digits">
           {getDigits()}
           <button onClick={() => updateDigits('0')}>0</button>
         </div>
      </div>
    </div>
  )
}

export default App2