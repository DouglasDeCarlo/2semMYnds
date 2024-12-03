import logo from './logo.svg';
import './App.css';
import { useEffect, useeffect, useState, usestate } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [logado, setlogado] = useState(false);

  useEffect(() => {
    console.log("useEffect chamado")
    setContador(contador + 1); 
  }, [logado])

  const logar = () => {
    setlogado(true);
  }

  const deslogar = () => {
    setlogado(false);
  }

  return (
    <div className="App">
      <h1> useEffect foi chamado {contador} vezes</h1>
       {logado ? <p>Logado</p> : <p> Deslogado </p>}
      <button onClick={logar}> Logar </button>
      <button onClick={deslogar}> Deslogar </button>
    </div>
  );
}

export default App


