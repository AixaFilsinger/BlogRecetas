import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { consultaEditarReceta, obtenerUnaReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {id} = useParams();

  const navegacion = useNavigate();

    const {register,handleSubmit,formState: { errors },reset, setValue} = useForm();
    const onSubmit = (recetaEditada) => {
      consultaEditarReceta(recetaEditada, id).then((respuesta)=>{
        if(respuesta && respuesta.status === 200){
          Swal.fire('Receta Modificada', `La receta ${recetaEditada.tituloReceta} fue modificada con exito`, 'success')
          navegacion('/administrador');
        }else {
          Swal.fire(
            "Error",
            `Intente realizar esta operacion mas tarde`,
            "error"
          );}

      })
        
        
    }

    useEffect(()=>{
      obtenerUnaReceta(id).then((respuesta)=>{
        setValue("tituloReceta", respuesta.tituloReceta);
        setValue("imagen", respuesta.imagen);
        setValue("categoria", respuesta.categoria);
        setValue("dificultad", respuesta.dificultad);
        setValue("descripcion", respuesta.descripcion);
        setValue("ingredientes", respuesta.ingredientes);
      })

    },[])



    return (
        <section className="container mainSection mt-5">
            <h2 className="display-4 fw-semibold text-center">Editar Receta</h2>
            <hr/>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formProducto">
            <Form.Label>Titulo Receta*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Cafe" 
            {...register("tituloReceta",{
                required: 'El nombre de la Receta es obligatorio y debe comenzar con mayúscula',
                minLength:{
                  value: 2,
                  message: 'El nombre de la Receta debe contener como mínimo 3 carácteres'
                },
                maxLength:{
                  value: 45,
                  message: 'El nombre de la Receta debe contener como máximo 50 carácteres'
                }
              })}/>
              <Form.Text className="text-danger">
                {errors.tituloReceta?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control type="text" placeholder="Ej: https://www.clarin.com/img/2013/10/13/las-medialunas-un-clasico-que___r1mfUtu3mg_1256x620.jpg" 
            {...register("imagen",{
                required: 'La URL de la Imagen es obligatoria y debe terminar con .jpg/.png/.svg',
                minLength:{
                  value: 1,
                  message: 'El precio del Producto debe contener como mínimo 2 digitos (mínimo 50)'
                },
                pattern:{
                  value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg)$/,
                  message: 'La URL de la Imagen debe terminar con .jpg/.png/.svg'
                }
              })}/>
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select aria-label="Categoria" {...register("categoria",{required: 'Debe elegir una opcion'})}>
            <option value=''>Seleccione una Categoria</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Agridulce">Agridulce</option>
            <option value="Frias">Frias</option>
            <option value="Cocina Argentinas">Cocina Argentina</option>
            <option value="Cocina Asiatica">Cocina Asiatica</option>
            </Form.Select>
            <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDificultad">
            <Form.Label>Dificultad*</Form.Label>
            <Form.Select aria-label="Dificultad" {...register("dificultad",{required: 'Debe elegir una opción'})}>
            <option value=''>Seleccione la Dificultad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
            </Form.Select>
            <Form.Text className="text-danger">
                {errors.dificultad?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label>Descripcion*</Form.Label>
            <Form.Control className="textarea1" as="textarea" rows={3} 
            {...register('descripcion',{
                required: 'La Descripcion es obligatoria',
                minLength:{
                  value: 5,
                  message: 'La Descripcion debe contener como mínimo 5 carácteres debe empezar con la primera letra mayúscula'
                },
                maxLength:{
                  value: 500,
                  message: 'La Descripcion debe contener como maximo 500 carácteres'
                }
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formingredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
          className="textarea1"
            as="textarea"
            rows={3}
            {...register("ingredientes", {
              required: "Los ingredientes son obligatorios obligatoria",
              minLength: {
                value: 5,
                message:
                  "La Ingredientes debe contener como mínimo 5 carácteres debe empezar con la primera letra mayúscula",
              },
              maxLength: {
                value: 500,
                message:
                  "La Ingredientes debe contener como maximo 500 carácteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
            <Button variant="primary" type="submit">Guardar</Button>
            </Form>
        </section>
    );
};

export default EditarReceta;