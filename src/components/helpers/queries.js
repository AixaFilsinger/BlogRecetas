//llamo a la variable de entorno

const url_usuarios = import.meta.env.VITE_Usuarios;

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