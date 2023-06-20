import error from "../../assets/error404.png"
import { Button } from 'react-bootstrap';

const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src={error} alt="error 404" />
        <div>
        <Button variant='danger' >Volver al inicio</Button>

        </div>
    </section>
    );
};

export default Error404;