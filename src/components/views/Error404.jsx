import error from "../../assets/error404.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <section className="mainSection text-center error404 p-5">
      <img src={error} alt="error 404"  className="img-fluid"/>
      <div className="mt-3">
        <Button variant="danger">Volver al inicio</Button>
      </div>
    </section>
  );
};

export default Error404;
