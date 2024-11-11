//rafce
import React from 'react'

const Saludar = () => {

  const despedirse = () => console.log("Chauchis");


  return (
    <div className='border border-danger p-4'>
        <h4>Bindeo de Eventos</h4>
        <button className="btn btn-success me-2" onClick={() => console.log("Holis")}>Presentarse</button>
        <button className="btn btn-warning me-2" onClick={despedirse}>Despedirse</button>
    </div>
  )
}

export default Saludar