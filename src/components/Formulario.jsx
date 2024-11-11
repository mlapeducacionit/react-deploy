// rafce

import { useEffect, useState } from "react"
import { createProducto } from "../store/slice/productos/acciones-thunk/createProducto"
import { useDispatch, useSelector } from "react-redux"
import { setProductoAEditar } from "../store/slice/productos"
import { updateProducto } from "../store/slice/productos/acciones-thunk/updateProducto"

const Formulario = () => {

  const formInicial = {
    id: null,
    nombre: '',
    categoria: '',
    precio: ''
  }

  const [form, setForm] = useState(formInicial)

  const { productoAEditar } = useSelector(store => store.productosReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])

  
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.id) {
      dispatch(updateProducto(form)) // acción thunk
    } else {
      dispatch(createProducto(form)) // acción thunk
    }

    handleResetear()
  }

  const handleResetear = () => {
    setForm(formInicial)
    dispatch(setProductoAEditar(null)) // Dispacho la acción sincrónica
  }

  return (
    <>
        <h2>Formulario de { productoAEditar ? 'edición' : 'carga' }</h2>
        <hr />
        <form 
          className="border border-success rounded-3 w-50 px-5 py-3 mb-5" 
          onSubmit={handleSubmit}
        >
            {/* Campo Nombre */}
            <div className="mb-3">
              <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                id="lbl-nombre"
                name="nombre"
                onChange={handleChange}
                placeholder="Escriba el nombre"
                value={form.nombre} />
            </div>

            {/* Campo Categoría */}
            <div className="mb-3">
              <label htmlFor="lbl-categoria" className="form-label">Categoría</label>
              <input 
                type="text" 
                className="form-control" 
                id="lbl-categoria" 
                name="categoria" 
                placeholder="Escriba el categoría"
                onChange={handleChange}
                value={form.categoria} />
            </div>

            {/* Campo Precio */}
            <div className="mb-3">
              <label htmlFor="lbl-precio" className="form-label">Precio</label>
              <input 
                type="text" 
                className="form-control" 
                id="lbl-precio" 
                name="precio" 
                placeholder="Escriba el precio"
                onChange={handleChange}
                value={form.precio} />
            </div>

            <button type="submit" className="btn btn-success me-2">{ productoAEditar ? 'Editar' : 'Guardar' }</button>
            <button type="reset" className="btn btn-danger" onClick={handleResetear}>Resetear</button>
        </form>
    </>
  )
}

export default Formulario