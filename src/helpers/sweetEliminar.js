import Swal from "sweetalert2"

export const sweetEliminar = () =>{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      })
}

export default sweetEliminar