import React, { useState } from 'react';

const LETTERS = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const DIGITS = [...'1234567890'];
const SPECIAL = [...'!@#$%^&*()'];

const App = () => {
  const [numOfLetters, setNumOfLetters] = useState(0);
  const [numOfSpecial, setNumOfSpecial] = useState(0);
  const [numOfDigits, setNumOfDigits] = useState(0);
  const [generated, setGenerated] = useState('');

  const randomItemFromArr = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  const handleSubmit = () => {
    const passwordArr = [];
    for (let i = 0; i < numOfLetters; i++) {
      passwordArr.push(randomItemFromArr(LETTERS));
    }

    for (let i = 0; i < numOfSpecial; i++) {
      passwordArr.push(randomItemFromArr(DIGITS));
    }

    for (let i = 0; i < numOfDigits; i++) {
      passwordArr.push(randomItemFromArr(SPECIAL));
    }

    const shuffledArr = shuffleArray(passwordArr);
    const password = shuffledArr.join('');
    setGenerated(password);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <>
      <div className='container mt-5'>
        <h1 className='mb-5'>Welcome to Password Generator</h1>
        <label>Number of Letters</label>
        <input
          type='number'
          className='form-control'
          value={numOfLetters}
          onChange={(e) => setNumOfLetters(e.target.value)}
        />

        <label>Number of Special Characters</label>
        <input
          type='number'
          className='form-control'
          value={numOfSpecial}
          onChange={(e) => setNumOfSpecial(e.currentTarget.value)}
        />

        <label>Number of Digits</label>
        <input
          type='number'
          className='form-control'
          value={numOfDigits}
          onChange={(e) => setNumOfDigits(e.currentTarget.value)}
        />

        <button type='button' className='btn btn-primary mt-2' onClick={handleSubmit}>
          Generate
        </button>

        {generated && <h3 className='mt-3'>Your password is {generated}!</h3>}
      </div>
    </>
  );
};

export default App;
