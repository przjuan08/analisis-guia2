"use client"

import { useState } from 'react';
import styles from './page.module.css';

export default function ConversorTemperatura() {
  const [temperatura, setTemperatura] = useState('');
  const [conversion, setConversion] = useState('Celsius a Fahrenheit');
  const [resultado, setResultado] = useState(null);

  const convertirTemperatura = () => {
    let temp = parseFloat(temperatura);
    if (isNaN(temp)) {
      setResultado('Por favor, ingresa un número válido.');
      return;
    }

    if (conversion === 'Celsius a Fahrenheit') {
      setResultado((temp * 9 / 5) + 32 + ' °F');
    } else {
      setResultado((temp - 32) * 5 / 9 + ' °C');
    }
  };

  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <h1>Conversor de Temperatura</h1>
        <input
          type="text" value={temperatura} onChange={(e) => setTemperatura(e.target.value)}
          placeholder="Ingresa la temperatura" className={styles.input}
        />
        <select value={conversion} onChange={(e) => setConversion(e.target.value)}
          className={styles.select}>
          <option value="Celsius a Fahrenheit">Celsius a Fahrenheit</option>
          <option value="Fahrenheit a Celsius">Fahrenheit a Celsius</option>
        </select>
        <button onClick={convertirTemperatura} className={styles.button}>
          Convertir
        </button>
        {resultado && <p className={styles.result}>El resultado son: {resultado}</p>}
      </div>
    </body>
  );
}