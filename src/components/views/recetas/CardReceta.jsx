import {  Card} from "react-bootstrap";
import { Link } from "react-router-dom";


const CardReceta = ({receta}) => {
    return (
        
      <Card className="m-1">
        <Card.Img
          variant="top"
          src={receta.imagen}
        />
        <Card.Body>
          <Card.Title className="text-truncate text-center fs-4 fw-semibold">{receta.tituloReceta}</Card.Title>
          <Card.Text>
            <span className="text-secondary fs-6">Categoria:</span> {receta.categoria}
          <br />
          <span className="text-primary fs-6">Dificultad:</span> {receta.dificultad}
          </Card.Text>
          <Link className="btn btn-primary me-2 mb-2" to={`/detalle/${receta.id}`}>Ver detalle</Link>
        </Card.Body>
      </Card>
    
    );
};

export default CardReceta;