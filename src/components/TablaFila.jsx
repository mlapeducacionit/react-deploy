import { useDispatch } from "react-redux";
import { deleteProducto } from "../store/slice/productos/acciones-thunk/deleteProducto";
import handleNotificacion from "../utils/handle-notificacion";
import { setProductoAEditar } from "../store/slice/productos";

const TablaFila = ({ producto }) => {

  const dispatch = useDispatch()

  const handleEliminar = ( id ) => {
    handleNotificacion(() => {
      dispatch(deleteProducto(id)) // acción thunks
    })

  }

  const handleEditar = (prod) => {
    dispatch(setProductoAEditar(prod)) // acción sincrónica
  } 

  return (
    <tr>
      <th scope="row">{producto.nombre}</th>
      <td>{producto.categoria}</td>
      <td>${producto.precio}</td>
      <td>
        <button className="btn btn-info me-2">Ver</button>
        <button 
          className="btn btn-warning me-2" 
          onClick={() => handleEditar(producto)}>
            Editar
        </button>
        <button className="btn btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
