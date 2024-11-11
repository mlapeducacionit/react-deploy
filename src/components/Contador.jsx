import { useState } from "react";
// rafce
const Contador = ({ valorInicial = 55 }) => {
  // ! ¿Qué es un estado en React?

  // * En react un estado se refiere a datos que cambian con el tiempo y afectan la forma en que se renderiza un componente.

  // * Los hooks en React se incomporan a partir de la versión 16.8. A partir de ese momento los componentes funcionales va a poder tener estado.

  // El hook para tener un estado en el componente funcional es useState. El useState es una función. Que recibe un argumento (de inicialización) y retorna un array de 2 posiciones.

  // ! UN ESTADO NO SE PUEDE MODIFICAR DIRECTAMENTE. Para eso está la función que modifica el estado

  /* const arrayDosPosiciones = useState(10)
  console.log(arrayDosPosiciones) */

  // * 0 -> El estado -> Variable que tiene un valor que puede cambiar (Es mutable)
  // * 1 -> La función que modifica el estado.

  //console.log(arrayDosPosiciones[0]) // estado
  //console.log(arrayDosPosiciones[1]) // función que modifica el estado
  //         0          1
  // const valorInicial = 50
  const [contador, setContador] = useState(valorInicial);
  console.log(contador);
  console.log(setContador);

  const handleIncrementar = () => {
    console.log('handleIncrementar')
    // contador++ // ! NO LO PUEDO HACER (Modificar el estado directamente)
    // contador = contador + 1 // ! NO LO PUEDO HACER (Modificar el estado directamente)
    setContador(contador + 1)
    //console.log(contador)
  }

  const handleDecrementar = () => {
    console.log('handleDecrementar')
    setContador(contador - 1)
  }

  const handleResetear = () => {
    console.log('handleResetear')
    setContador(valorInicial)
  }

  return (
    <div className="border border-dark rounded-3 p-4 mb-2">
        <h2>Contador: {contador}</h2>
        <hr />
        <button className="btn btn-success me-2" onClick={handleIncrementar}>Incrementar</button>
        <button className="btn btn-warning me-2" onClick={handleDecrementar}>Decrementar</button>
        <button className="btn btn-danger" onClick={handleResetear}>Resetear</button>
    </div>
  );
};

export default Contador;
