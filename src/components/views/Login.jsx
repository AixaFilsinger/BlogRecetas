import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { iniciarSesion } from "../helpers/queries";
import { useNavigate } from "react-router";


const Login = ({setUsuarioLogueado}) => {

  

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      const navegacion = useNavigate();

      const onSubmit = (usuario)=>{
        // console.log(usuario);
         iniciarSesion(usuario).then((respuesta)=>{
          if(respuesta){
            //debo logear al usuario
            localStorage.setItem('usuario', JSON.stringify(respuesta))
            setUsuarioLogueado(respuesta);
            Swal.fire('Bienvenido', 'Inicio sesión correctamente', 'success')
            navegacion('/administrador');
          }else{
            //debo indicar el error
            Swal.fire('Error', 'El Email o la Contraseña son incorrectos', 'error');
          }

         })
     
       }
    return (
        <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h4" className="text-center fw-bold">Iniciar sesión</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="id-email">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese un email" {
                ...register("email", {
                  required: 'El email es obligatorio',
                  pattern:{
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: 'El email debe contener @ y terminar . com/es/com.ar o algo similar'
                }})
              }/>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="id-password">
              <Form.Label className="fw-semibold">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" {
                ...register("password", {
                  required: 'La contraseña es obligatoria',
                  pattern:{
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'El password debe contener 8 caracteres. (Por lo menos debe tener 1 letra mayúscula, 1 letra minúscula y 1 numero)'
                  }
                })
              }/>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default Login;