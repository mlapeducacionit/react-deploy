// Acción Thunk (asincrónica) para la edición del un producto
import { editProducto } from ".."
import handleHttp from "../../../../utils/handle-http"

export const updateProducto = (productoEditado) => async (dispatch) => {

    const url = import.meta.env.VITE_ENDPOINT_BACKEND

    // ! 1. Petición asincrónica que modifica el producto en el backend
    try {

        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/json '},
            body: JSON.stringify(productoEditado)
        }

        const urlEdicion = url + productoEditado.id

        const productoActualizado = await handleHttp(urlEdicion, options)
        // --->  En este punto la info esta dentro de la aplicación react (Sincrónico)
        // ! 2. Disparar la acción sincrónica
        dispatch(editProducto(productoActualizado))
        
    } catch (error) {
        console.error(error)
    }

}