import React from "react";
import "./staticMenu.css";
import logo from "../assets/logo.png"
import foto from "../assets/foto.jpg"
const TopNav=()=>{

    return(
        <>
        <div className="topNav" >
            <div className="logo"> <img src={logo} alt="Logo" /> </div>
            <a href="#home">Inicio</a>
            <a href="#whoAreWe">Quienes somos</a>
            <a href="#products">Productos</a>
            <a href="#about">Acerca de</a>
            <a href="#vendors">Proveedores</a>
            <a href="#clients">Clientes</a>
            <a href="#contact">Contacto</a>
        </div>

        <div className="whoAreWe" id="whoAreWe">
            
            <h2>Quienes somos</h2>
            <img className="foto" src={foto} alt="" />
            <div className="text-hover-image">Soy un estudiante de Ingenieria en sistemas con animo de aprender nuevas herramientas. Listo para superar los retos
            que presente la carrera. </div>

        </div>
        <div className="products" id="products">
            <h2>Productos</h2>
        </div>
        <div className="about" id="about">
            <h2>Acerca de</h2>
            <div className="mission" id="mision">
                <h3> Misión</h3>
                <p>Brindar calzado que represente tu forma de ser y te ayude a expresar quien eres. Ser una marca que se diferencie por opciones variadas y personalizadas utilizando subproductos que de otra forma se desperdiciarian.
                El calzado mas que una necesidad, es una expresion del alma.</p>
            </div>
            <div className="vision" id="vision">
                <h3>Visión</h3>
                <p>Ser marca #1 en calzado de cuero y ser reconocida por la personalizacion y expresion de tu ser por medio de nuestros productos.

                </p>
            </div> 
        </div>
        <div className="vendors" id="vendors">
            <h2>Proveedores</h2>
        </div>
        <div className="clients" id="clients">
            <h2>Clientes</h2>
        </div>
        <div className="contact" id="contact"> 
            <h2>Contacto</h2>
            <ul>
                <li>Direccion:</li>
                <li>Numero de telefono:</li>
                <li>Direccion: </li>
                <li>Correo </li>
            </ul>
        </div>

        <div className="footer">
            <p>
                Conocereis la verdad y la verdad los hara libres.
            </p>

        </div>
        </>
    );
};
export default TopNav;