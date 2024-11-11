import Swal from "sweetalert2";

const handleNotificacion = (cb) => {

    // Implementando Sweet Alert
    Swal.fire({
        title: "¿Estás seguro de que querés borrar el producto",
        text: "No vas a poder volver a trás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, papá borralo!",
        cancelButtonText: "Nooooo....."
    }).then((result) => {
        if (result.isConfirmed) {

            cb()
            
            Swal.fire({
            title: "Borrado!",
            text: "El producto fue borrado.",
            icon: "success"
            });
        }
    });

}

export default handleNotificacion