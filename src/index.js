//Se encarga que toda la aplicación lo dirija al DOM


//1) Necesitamos la variable React en Scope
import React from "React" 
//const React = require ("react") <--- sería igual que la de arriba

//2) Necesitamos la variable ReactDoM en Scope
import ReactDOM from "react-dom"

//3)Necesitamos una aplicación de React
import App from "./App"
import "./estilos.css"

//4) Necesitamos dibujar la aplicacion en el DOM
ReactDOM.render (<App/> ,document.getElementById("root"))