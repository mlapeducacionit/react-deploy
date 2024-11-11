// Acción thunk (Asincrónica) para la eliminación del producto del backend

import { removeProducto } from ".."
import handleHttp from "../../../../utils/handle-http"

export const deleteProducto = (id) => async (dispatch) => {

    const url = import.meta.env.VITE_ENDPOINT_BACKEND

    try {

        // ! 1. Hacer la petición asincronica para borrar el producto del backend
        const options = {
            method: 'DELETE'
        }

        const urlBorrado = url + id

        const productoEliminado = await handleHttp(urlBorrado, options)
        console.log(productoEliminado)
        // ----> En este punto tenemos sincronico
        // ! 2. Hago el disparo de la acción sincrónica
        dispatch(removeProducto(productoEliminado))
        
    } catch (error) {
        console.error(error)
    }

}