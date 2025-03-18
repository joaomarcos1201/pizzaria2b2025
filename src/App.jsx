import { useState } from "react"

function App(){


const [nome, setnome] = useState('ronaldo')

  return (
    <div>
      <h3>Pizzaria 2b</h3>
      <input className="nome"
      placeholder="digite seu nome..."
      onChange={(e)=>{setnome(e.target.value)}}
      name="nome"
      type="text" />
      <button className="botao" onClick={()=>alert(nome)}>
        Clique aqui
      </button>
    </div>
  )
}

export default App