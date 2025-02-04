import logo from './logo.svg';
import './App.css';
import { useEffect, useeffect, useState, usestate } from 'react';
import FunctionSimples from './componentes/exemplos/FunctionSimples.jsx';
import FunctionDupla from './componentes/exemplos/FunctonDupla.jsx';
import Botao from './componentes/Button/Botao.jsx';

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
      <FunctionSimples></FunctionSimples>
      <FunctionDupla></FunctionDupla>

      <h1> useEffect foi chamado {contador} vezes</h1>
      {logado ? <p>Logado</p> : <p> Deslogado </p>}

      <Botao tarefa={logar} classe="botao green">Logar</Botao>
      <Botao tarefa={deslogar} classe="botao red">Deslogar</Botao>
      <hr />
      <button onClick={logar}> Logar </button>
      <button onClick={deslogar}> Deslogar </button>
    </div>
  );
}

export default App


