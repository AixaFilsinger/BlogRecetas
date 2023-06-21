import { Table, Button } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../helpers/queries";


const Administrador = () => {
  
  const [recetas, setRecetas] = useState([]);

  useEffect(()=>{
    obtenerRecetas().then((respuesta)=>{
      setRecetas(respuesta);
    })
  },[])

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4  fw-semibold">Listado de Recetas</h1>
          <Button className="btn btn-primary" >
            Agregar
          </Button>
        </div>
        <hr />
        <section className="table-responsive">
        <Table  striped bordered hover>
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
              recetas.map((receta)=><ItemReceta key={receta.id} receta={receta}></ItemReceta>)
            }
           
          </tbody>
        </Table>
        </section>
      </section>
    );
};

export default Administrador;