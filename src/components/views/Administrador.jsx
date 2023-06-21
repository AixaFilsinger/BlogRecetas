import { Table} from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Administrador = () => {
  
  const [recetas, setRecetas] = useState([]);

  useEffect(()=>{
    obtenerRecetas().then((respuesta)=>{
      if(respuesta){
        setRecetas(respuesta);
      } else{
        Swal.fire(
          'Se produjo un error al intentar cargar los datos',
          `Intente realizar esta operacion mas tarde`,
          'error');
      }
      
    })
  },[])

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4  fw-semibold">Listado de Recetas</h1>
          <Link className="btn btn-primary"  to={'/administrador/crear'}>
            Agregar
          </Link>
        </div>
        <hr />
        <section className="table-responsive">
        <Table responsive striped bordered hover  >
          <thead>
            <tr>
              <th>Cod</th>
              <th>Receta</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Dificultad</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {
              recetas.map((receta)=><ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas}></ItemReceta>)
            }
           
          </tbody>
        </Table>
        </section>
      </section>
    );
};

export default Administrador;