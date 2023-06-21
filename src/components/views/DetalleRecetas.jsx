import { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect } from "react";
import { obtenerUnaReceta } from "../helpers/queries";

const DetalleRecetas = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  useEffect(() => {
    obtenerUnaReceta(id).then((respuesta) => {
      setReceta(respuesta);
    });
  }, []);
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={receta.imagen} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="display-5 fw-bold">
                {receta.tituloReceta}
              </Card.Title>
              <hr />
              <Card.Text>
                <p>{receta.descripcion}</p>
                <div className="d-flex justify-content-center ">
                  <aside className="me-5 fw-semibold text-secondary">
                    Categoria: {receta.categoria}
                  </aside>
                  <aside className="fw-semibold text-secondary">
                    Dificultad: {receta.dificultad}
                  </aside>
                </div>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleRecetas;
