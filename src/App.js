import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [image1, image2, image3, image4, image5];

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
    setCurrentImage(getRandomImage());
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
    setCurrentImage(getRandomImage());
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
    setCurrentImage(getRandomImage());
  };

  const handleDivision = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
      setCurrentImage(getRandomImage());
    } else {
      setResult('Error: División por cero');
      setCurrentImage(null);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora El Pipote</h1>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} placeholder="Número 1" />
        <input type="number" value={num2} onChange={handleNum2Change} placeholder="Número 2" />
      </div>
      <div>
        <button className='alberto-boton'onClick={handleAddition}>Sumar</button>
        <button className='alberto-boton-2'onClick={handleSubtraction}>Restar</button>
        <button className='alberto-boton-3'onClick={handleMultiplication}>Multiplicar</button>
        <button className='alberto-boton-4'onClick={handleDivision}>Dividir</button>
      </div>
      {result !== null && <h2>Resultado: {result}</h2>}
      {currentImage && <img src={currentImage} alt="Resultado aleatorio" className="result-image" />}
    </div>
  );
}

export default App;
