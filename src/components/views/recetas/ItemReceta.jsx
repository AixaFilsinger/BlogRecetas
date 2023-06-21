import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemReceta = ({receta}) => {

  const borrarReceta=()=>{
    Swal.fire({
      title: '¿Esta seguro de eliminar la receta?',
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198724',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire('Receta eliminada', `La receta ${receta.tituloReceta} se elimino con exito`, 'success')
      }
    })
     
  }

    return (
        <tr>
      
        <td>{receta.id}</td>
        <td>{receta.tituloReceta}</td>
        <td>{receta.imagen}</td>
        <td>{receta.categoria}</td>
        <td>{receta.dificultad}</td>
        <td>
          <Link className="btn btn-warning me-2 mb-2" to={'/administrador/editar'}>Editar</Link>
          <Button variant="danger" className="mb-2"  onClick={borrarReceta}>
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemReceta;