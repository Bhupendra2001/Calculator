import React, { useState } from 'react';
import './Calculator.css'
function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className='cont'>
      <h1>Basic Calculator</h1>
      <div className='input1'>
        <label>Number 1:</label>
        <input type="number" value={num1} onChange={handleNum1Change} />
      </div>
      <div className='input2'>
        <label>Number 2:</label>
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <div className='btn'>
        <button onClick={handleAddition}>Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
        <button onClick={handleMultiplication}>Multiplication</button>
        <button onClick={handleDivision}>Division</button>
      </div>
      {result && <h1 className='res'>Result: {result}</h1>}
    </div>
  );
}

export default Calculator;
