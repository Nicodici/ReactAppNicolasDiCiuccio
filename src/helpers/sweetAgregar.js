import Swal from "sweetalert2"

export const mostrarSweetAlert = () =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
}

export default mostrarSweetAlert