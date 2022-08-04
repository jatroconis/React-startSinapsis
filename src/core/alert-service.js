import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const alertService = {
  error: (text) => {
    MySwal.fire({
      title: "Error",
      text,
      icon: "error",
      confirmButtonText: "Aceptar",
      showCancelButton: false,
    });
  },
  success: (text = "Proceso ejecutado con exito") => {
    MySwal.fire({
      title: "Exito",
      text,
      icon: "success",
      confirmButtonText: "Aceptar",
      showCancelButton: false,
    });
  },
  confirmDelete: () => {
    return MySwal.fire({
      title: "Eliminar",
      text: "¿Desea eliminar este elemento?",
      icon: "info",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    });
  },
};
export { alertService };
