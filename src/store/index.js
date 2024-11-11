import { configureStore } from "@reduxjs/toolkit";
import productosReducer from './slice/productos'
// La configuración del store
export default configureStore(
    {
        reducer: {
            /* Todos los reducer de mi aplicación (los slices que creemos) */
            productosReducer
        }
    }
)