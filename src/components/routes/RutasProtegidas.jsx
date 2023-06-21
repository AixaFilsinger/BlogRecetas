import { Navigate } from "react-router";

const RutasProtegidas = ({children}) => {
    
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuario')) || null;
    //preguntar si el usuario no esta logeado

    if(!usuarioLogeado){
        return <Navigate to={'/login'}></Navigate>
    }else{
        return children;
    }
};

export default RutasProtegidas;