import { useEffect } from "react"
import Formulario from "../components/Formulario"
import TablaListado from "../components/TablaListado"

const Productos = () => {
    
  useEffect(() => {
    document.title = 'Educación IT - Productos' 
  }, [])
 
  return (
    <>
      <h1>CRUD Productos</h1>
      <hr />
      <Formulario />
      <TablaListado />
    </>
  )
}

export default Productos