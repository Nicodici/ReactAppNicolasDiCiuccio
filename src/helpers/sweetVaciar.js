import Swal from "sweetalert2"

export const sweetVaciar = () =>{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Carrito de compras vacío',
        showConfirmButton: false,
        timer: 1500
      })
}

export default sweetVaciar