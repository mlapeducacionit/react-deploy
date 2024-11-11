import { createSlice } from "@reduxjs/toolkit";

// slice de productos
export const productosSlice = createSlice(
    {
        name: 'productos',
        initialState: {
            productos: null, // la la lista de productos
            productoAEditar: null // El producto que luego se muestra en el formulario para comezar con la edición
        },
        reducers: { /* acciones sincrónicas */
            setProductos: (state, action) => {
                console.log(state)
                console.log(action) // { type, payload: data}
                state.productos = action.payload
            },
            addProducto: (state, action) => {
                console.log(action) // { type: 'productos/addProductos', payload: nuevoProductoConId }
                state.productos = [...state.productos, action.payload ]
            },
            removeProducto: (state, action) => {
                console.log(action)
                const id = action.payload.id
                const nuevoEstadoProductos = state.productos.filter(prod => prod.id !== id)
                state.productos = nuevoEstadoProductos
            },
            editProducto: (state, action) => {
                console.log(action)
                const productoEditado = action.payload 
                const nuevoEstadoProductos = state.productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
                state.productos = nuevoEstadoProductos

            },
            setProductoAEditar: (state, action) => {
                console.warn('----> se está seteando el productoAEditar en el store')
                console.log(action) // { type, payload: prod }
                state.productoAEditar = action.payload 
            }
        }
    }
)

// Exportamos dentro de un objeto las acciones
export const { 
    setProductos, 
    addProducto, 
    removeProducto,
    editProducto, 
    setProductoAEditar } = productosSlice.actions

// Exportamos el reducer como funcionalidad principal de este modulo
export default productosSlice.reducer