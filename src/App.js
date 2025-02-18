import React, { useState } from 'react'
import { useGetAPIDATA } from './hooks/getAPIDATA';

function App() {
  const [sorveteNome, setSorveteNome] = useState('');
  const [sorveteDigitado, setSorveteDigitado] = useState('');
  const { sorveteData, loading, error } = useGetAPIDATA(sorveteNome);

  const handleInputChange = (e) => {
    setSorveteDigitado(e.target.value);
  }
  function BuscarSorverte() {
    setSorveteNome(sorveteDigitado);
    
  }

  return (
    <div>
      <input
        type="text"
        name="sorvete"
        id="sorvete"
        placeholder='Nome do Sorvete'
        value={sorveteDigitado}
        onChange={handleInputChange}
      />
      <button onClick={() => BuscarSorverte()}>Buscar Sorvete</button>

      {loading && <p>Carregando...</p>}

      {error && <p>Erro ao buscar sorvete. Erro: {error}</p>}

      {Array.isArray(sorveteData) ? (
        <div>
          {sorveteData.map((sorvete) => (
            <h1 key={sorvete.mal_id}>{sorvete.title}</h1>
          ))}
        </div>
      ) : (
        sorveteData && <h2>Nenhum sorvete com este nome</h2>
      )}

    </div>
  )
}

export default App

