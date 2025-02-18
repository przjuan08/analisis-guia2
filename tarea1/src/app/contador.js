"use client"

import { useState } from 'react';
import styles from './page.module.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className={styles.contador}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar} className={styles.boton}>Incrementar</button>
      <button onClick={decrementar} className={styles.boton}>Decrementar</button>
    </div>
  );
};

export default Contador;