import { useState } from 'react'
import { nanoid } from 'nanoid'

import './App.css'

export function App() {
  const [password, setPassword] = useState("...")

  function handlePassword() {
    setPassword(nanoid())
  }

  return (
    <div id="main-container">
      <h1>Gerador de senhas</h1>
      <div id="password-container">
        <button onClick={ () => handlePassword() }>Gerar senha</button>
        <span>{password}</span>
      </div>
    </div>
  )
}
