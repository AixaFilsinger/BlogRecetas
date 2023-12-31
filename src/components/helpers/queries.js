import axios from "axios";
//llamo a la variable de entorno

const url_usuarios = import.meta.env.VITE_Usuarios;
const url_recetas = import.meta.env.VITE_Recetas;

export const iniciarSesion =  async (usuario)=>{
    console.log(usuario);

    try {

        const respuesta = await axios.request({
           url: url_usuarios,
           method: 'POST',
           headers: {
            "Content-Type": "application/json"
        },
        data: usuario
        })
        const usuario_Buscado = respuesta.data
        console.log(usuario_Buscado)
        //buscar si en listadousuarios hay un usuario iguel al que recibi por parametros

       

        if(usuario_Buscado){
            console.log("Email encontrado")
            //verificar si la contraseña es igual
            return usuario_Buscado
            
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

        const respuesta = await axios.get(url_recetas);
        const listaRecetas = respuesta.data
        return listaRecetas;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}
export const obtenerUnaReceta = async (id)=>{
    try {

        const respuesta = await axios.get(`${url_recetas}/${id}`);
        const recetaEditar= respuesta.data
        return recetaEditar;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}

export const consultaEliminarReceta = async (id)=>{
    try {
      const respuesta = await axios.request({
        url:`${url_recetas}/${id}`,
        method: 'DELETE'
       });
      return respuesta
        
    } catch (error) {
        console.log(error);
        
    }
}
export const consultaCrearReceta = async (receta)=>{
    const usuarioLocal= JSON.parse(localStorage.getItem("usuario")) || {}
    console.log(usuarioLocal)
    try {
        const respuesta = await axios.request({
            url:url_recetas ,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
          data: {receta, token : usuarioLocal.token}
        }
        )
      return respuesta.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export const consultaEditarReceta = async (receta, id)=>{
    try {
        const respuesta = await axios.request({
            url: url_recetas+'/'+id,
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            data:receta
        });
      return respuesta
        
    } catch (error) {
        console.log(error);
        
    }
}