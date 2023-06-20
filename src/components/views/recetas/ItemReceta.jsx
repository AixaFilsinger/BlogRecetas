import { Button } from "react-bootstrap";

const ItemReceta = () => {
    return (
        <tr>
      
        <td>1</td>
        <td>Pastel de papas</td>
        <td>Salado</td>
        <td>imagen</td>
        <td>media</td>
        <td>
          <Button className="btn btn-warning me-2 mb-2" >Editar</Button>
          <Button variant="danger" className="mb-2" >
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemReceta;