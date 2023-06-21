import React from "react";
import { Routes, Route } from "react-router";
import Administrador from "../views/Administrador";
import CrearReceta from "../views/recetas/CrearReceta";
import EditarReceta from "../views/recetas/EditarReceta";

const RutasAdmin = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Administrador></Administrador>}></Route>
      <Route
        exact
        path="/crear"
        element={<CrearReceta></CrearReceta>}
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<EditarReceta></EditarReceta>}
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
