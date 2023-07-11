import { useState } from 'react'
import { nanoid } from 'nanoid'
import copy from 'clipboard-copy';


import './App.css'

export function App() {
  const [password, setPassword] = useState("...")

  function handlePassword() {
    setPassword(nanoid())
  }

  function handleCopyPassword() {
    copy(password)
      .then(() => alert("Senha copiada com sucesso!"))
      .catch(() => alert("Ocorreu um erro na cópia, por favor tente novamente!"))

  }

  return (
    <div id="main-container">
      <h1>Gerador de senhas</h1>
      <div id="password-container">
        <button onClick={ () => handlePassword() } >Gerar senha</button>
        <span onClick={handleCopyPassword} >{password}</span>
      </div>
    </div>
  )
}
