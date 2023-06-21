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
          <Card.Title>{receta.tituloReceta}</Card.Title>
          <Card.Text>{receta.categoria}</Card.Text>
          <Link className="btn btn-primary me-2 mb-2" to={`/detalle/${receta.id}`}>Ver detalle</Link>
        </Card.Body>
      </Card>
    
    );
};

export default CardReceta;