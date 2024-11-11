
// ! Middleware (Redux Thunk) -> Es el responsable de gestionar la asincronía
// Creamos la acción asincrónica que va a obtener todos los productos ( acción thunk )

import { setProductos } from ".."
import handleHttp from "../../../../utils/handle-http"

export const getAllProductos = () => async ( dispatch ) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND

    try {
        // hacer la petición asincrónica para obtener los productos
        console.log(url)
        const data = await handleHttp(url)
        // ----> En este punto es sincrónico
        // voy a hacer el dispatch de la acción sincrónica (setProductos)
        dispatch(setProductos(data))
        
    } catch (error) {
        console.error(error)
    }


}
