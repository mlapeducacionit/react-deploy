import { useEffect } from "react"
import Contador from "../components/Contador"
import Saludar from "../components/Saludar"
// rafce

const Inicio = () => {

  useEffect(() => {
    document.title = 'Educación IT - Inicio'  
  }, [])
  
  return (
    <>
        <h1>Estados en React</h1>
        <hr />

        <Contador valorInicial={77} />

        <Contador valorInicial={11} />

        <Contador valorInicial={33} />

        <Contador valorInicial={88} />
        
        <Contador valorInicial={222} />

        <hr />

        <Saludar />
    </>
  )
}

export default Inicio