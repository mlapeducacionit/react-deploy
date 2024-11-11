// ! Acción Redux Thunk (middleware) para guardar el producto en el backend
// ! Acción asincrónica (acción thunk)

import { addProducto } from ".."
import handleHttp from "../../../../utils/handle-http"

export const createProducto = (nuevoProducto) => async (dispatch) => {

    const url = import.meta.env.VITE_ENDPOINT_BACKEND
    delete nuevoProducto.id // borrando la key id que viene con null
    
    try {

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        }

        // Hago la petición asicrónica para crear el producto en el backend
        const nuevoProductoConId = await handleHttp(url, options)
        // ---> Esto ya es sincrónico
        // ---> Disparo la acción sincrónica
        dispatch(addProducto(nuevoProductoConId))

    } catch (error) {
        console.error(error)
    }

}

