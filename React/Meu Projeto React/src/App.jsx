
import MeuComponente from "./components/MeuComponente"

function App() {
  

  return (

     <div>
       <h1>Olá Mundo React!</h1>
     <MeuComponente />
     <MeuComponente />
     <MeuBotao conteudo='Me clique'/>
     <MeuBotao conteudo='Depois aqui' />
     <MeuBotao conteudo='E por fim aqui'/>
     </div>
     
 
  )
}
function MeuBotao(props) {
  //console.log(props)
 // console.log(props.conteudo)
  return (
   // <button>Clique aqui!</button>
    <button>{props.conteudo}</button>
  )
}


export default App

