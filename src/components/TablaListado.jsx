import { useDispatch, useSelector } from "react-redux";
import TablaFila from "./TablaFila";
import { useEffect } from "react";
import { getAllProductos } from "../store/slice/productos/acciones-thunk/getAllProductos";

const TablaListado = () => {

  const { productos } = useSelector(store => store.productosReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductos()) // disparo de la acción que hace la petición (acción thunk).
  }, [])

  return (
    <>
      <h2>Tabla Listado</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre de producto</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

            {
              productos && productos.map(producto => (
                <TablaFila 
                  key={producto.id} 
                  producto={producto} 
                />
              ))
            }

        </tbody>
      </table>

    </>
  );
};

export default TablaListado;
