import './App.css';
import Menu from './components/common/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import DetalleRecetas from './components/views/DetalleREcetas';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import Administrador from './components/views/Administrador';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearReceta from "./components/views/recetas/CrearReceta";
import EditarReceta from "./components/views/recetas/EditarReceta";
import { useState } from 'react';




function App() {
  
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado}  setUsuarioLogueado={ setUsuarioLogueado}></Menu>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path='/registro' element={<Registro></Registro>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/login' element={<Login setUsuarioLogueado= {setUsuarioLogueado}></Login>}></Route>
      <Route exact path='/detalle' element={<DetalleRecetas></DetalleRecetas>}></Route>
      <Route exact path='/administrador/crear' element={<CrearReceta></CrearReceta>}></Route>
      <Route exact path='/administrador/editar' element={<EditarReceta></EditarReceta>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
      
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
