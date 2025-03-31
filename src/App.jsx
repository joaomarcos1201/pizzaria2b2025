import { useState } from "react"

function App(){




const Formulario = (props) => {

  const [nome, setnome] = useState('ronaldo')

  return (
    <div>
      <h3> {props.titulo}</h3>
      <input className="nome"
      placeholder="digite seu nome..."
      onChange={(e)=>{setnome(e.target.value)}}
      name="nome"
      type="text" />
      <button className="botao" onClick={
                 () => {
                  if(nome.lenght > 0)
                 alert(nome)
                else
                alert(props.mensagem)
      }
    }>
        Clique aqui
      </button>
    </div>
  )
}



  return (
    <div>
      <h3>Pizzaria 2b</h3>
      < Formulario titulo ="NOME" mensagem = "santos" />
      < Formulario titulo ="EMAIL" mensagem = "sao paulo" />
      < Formulario titulo ="CPF" mensagem = "sla" />
      < Formulario />
      
    </div>
  )
}

export default App