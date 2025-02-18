"use client"

import { useState } from 'react';
import styles from './page.module.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && contrasena === 'admin') {
      setMensaje('¡Bienvenido!');
    } else {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Iniciar Sesión</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario"value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>Iniciar Sesión</button>
      </form>
      {mensaje && <p className={styles.message}>{mensaje}</p>}
    </div>
  );
};

export default Login;