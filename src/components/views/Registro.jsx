import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (usuario)=>{
    // console.log(usuario);
     
 
   }
    return (
        <div className="mt-5 mainSection">
        <h3 className="text-center fw-bold fs-2 ">Registro</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  {...register("nombre",{
                    required: 'El nombre de la Receta es obligatorio y debe comenzar con mayúscula',
                    minLength:{
                      value: 2,
                      message: 'El nombre de la Receta debe contener como mínimo 3 carácteres'
                    },
                    maxLength:{
                      value: 30,
                      message: 'El nombre de la Receta debe contener como máximo 50 carácteres'
                    }
                  })}/>
                  <Form.Text className="text-danger">
                    {errors.nombre?.message}
                  </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Ingrese un email" {
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
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Ingrese un password"{
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
              <div className="row">
                <Button
                  className="btn btn-primary btn-lg btn-block mb-2"
                  type="submit"
                >
                  Registrar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Registro;