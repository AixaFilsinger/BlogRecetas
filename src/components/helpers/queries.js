//llamo a la variable de entorno

const url_usuarios = import.meta.env.VITE_Usuarios;
const url_recetas = import.meta.env.VITE_Recetas;

export const iniciarSesion =  async (usuario)=>{
    console.log(usuario);

    try {

        const respuesta = await fetch(url_usuarios)
        const listadoUsuarios = await respuesta.json();
        console.log(listadoUsuarios)
        //buscar si en listadousuarios hay un usuario iguel al que recibi por parametros

        const usuario_Buscado = listadoUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email);

        if(usuario_Buscado){
            console.log("Email encontrado")
            //verificar si la contraseña es igual

            if(usuario_Buscado.password === usuario.password){
                console.log("usuario encontrado")
                return usuario_Buscado;
            }else{
                console.log("contrsaeña incorrecta")
                return null;
            }
        }else{
            console.log("email incorrecto");
            return null;
        }
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const obtenerRecetas = async ()=>{
    try {

        const respuesta = await fetch(url_recetas);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}
export const obtenerUnaReceta = async (id)=>{
    try {

        const respuesta = await fetch(`${url_recetas}/${id}`);
        const recetaEditar= await respuesta.json();
        return recetaEditar;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}

export const consultaEliminarReceta = async (id)=>{
    try {
      const respuesta = await fetch(`${url_recetas}/${id}`, {
        method: "DELETE"
      });
      return respuesta
        
    } catch (error) {
        console.log(error);
        
    }
}
export const consultaCrearReceta = async (receta)=>{
    try {
      const respuesta = await fetch(url_recetas, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(receta)
      });
      return respuesta
        
    } catch (error) {
        console.log(error);
        
    }
}
export const consultaEditarReceta = async (receta, id)=>{
    try {
      const respuesta = await fetch(`${url_recetas}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(receta)
      });
      return respuesta
        
    } catch (error) {
        console.log(error);
        
    }
}