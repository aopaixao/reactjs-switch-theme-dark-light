import React from "react";
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import CadastroISO from "../pages/CadastroIso";
import CadastroOptions from "../pages/CadastroIso/CadastroOption";
import Home from "../pages/Home";

export default function RoutesNav() {
  return (
    <BrowserRouter>
        <Routes>
            <Route
                path='/' exact
                element={
                  <Home />
                }
            />
            <Route
                path='/cadastro-iso'
                element={
                  <CadastroISO />
                }
            />
            <Route
                path='/cadastro-option'
                element={
                  <CadastroOptions />
                }
            />
        </Routes>
    </BrowserRouter>
);
}