import {  Card, Button } from "react-bootstrap";


const CardReceta = () => {
    return (
        
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/10273537/pexels-photo-10273537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>Pastelde papas</Card.Title>
          <Card.Text>Categoria: Salado</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    
    );
};

export default CardReceta;