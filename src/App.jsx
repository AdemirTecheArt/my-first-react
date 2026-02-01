import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  function zerar() {
    setContador(0)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Meu primeiro React</h1>

      <p>Contador: {contador}</p>

      <button onClick={aumentar}>
        Aumentar
      </button>

      <button onClick={diminuir}>
        Diminuir
      </button>

      <button onClick={zerar}>
        Zerar
      </button>

    </div>
  )
}

export default App