import React, { useState,useRef } from "react";
import "./staticMenu.css";
import logo from "../assets/logo.png"
import foto from "../assets/foto.jpg"
import ReactCardFlip from "react-card-flip"
import Products from './products';
import Vendors from "./vendors";
import Clients from "./clients";
import Marquee from "./marquee";



const TopNav=()=>{

    const[nameHover,setNameHover]=useState(false);
    const[carnetHover,setCarnetHover]=useState(false);
    const[descriptionHover,setDescriptionHover]=useState(false);
    const[isFlipped, setIsFlipped]=useState(false);
    const[isFlipped1, setIsFlipped1]=useState(false);

    function flippCard(){
        setIsFlipped(!isFlipped);
    };
    function flippCard1(){
        setIsFlipped1(!isFlipped1);
    };
    return(
        <>
        <div className="topNav" >
            <div className="logo"> <img src={logo} alt="Logo" /> </div>
            <a href="">Inicio</a>
            <a href="#whoAreWe">Quienes somos</a>
            <a href="#about">Acerca de</a>
            <a href="#products">Productos</a>
            <a href="#vendors">Proveedores</a>
            <a href="#clients">Clientes</a>
            <a href="#contact">Contacto</a>
            <Marquee/>
        </div>

        <div className="whoAreWe" id="whoAreWe">
            
            <h2>Quienes somos</h2>
            <div className="whoAreWe-container">
                <div className="foto">
                    <img src={foto} alt="" />
                    <div className={nameHover ? "name":"name-hover-image"}>Diego Estuardo Lopez Sequen</div>
                    <div className={carnetHover ? "carnet": "carnet-hover-image"}>0900-25-20977</div>
                    <div className={descriptionHover? "description":"text-hover-image"}>Soy un estudiante de Ingenieria en sistemas con animo de aprender nuevas herramientas. Listo para superar los retos
                    que presente la carrera. </div>
                </div>
                <div className="list-foto">
                    <p onMouseEnter={()=>setNameHover(true)} onMouseLeave={()=>setNameHover(false)} className="name-text">Nombre</p>
                    <p onMouseEnter={()=>setCarnetHover(true)} onMouseLeave={()=>setCarnetHover(false)} className="carnet-text">Carnet</p>
                    <p onMouseEnter={()=>setDescriptionHover(true)} onMouseLeave={()=>setDescriptionHover(false)} className="description-text">Descripcion</p>

                </div>
            </div>

        </div>
        <h2>Acerca de</h2>
        <div className="about" id="about">
            <div className="mission" id="mision">
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}> 
                        <div className="card" onClick={flippCard}>
                            <h3> Misión</h3>
                        </div>
                        <div className="card " onClick={flippCard}>
                            <p>Brindar calzado que represente tu forma de ser y te ayude a expresar quien eres. Ser una marca que se diferencie por opciones variadas y personalizadas utilizando subproductos que de otra forma se desperdiciarian.
                            El calzado mas que una necesidad, es una expresion del alma.</p>
                        </div>
                </ReactCardFlip>
            </div>
            <div className="vision" id="vision">
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
                    <div className="card" onClick={flippCard1}>
                        <h3>Visión</h3>
                    </div>
                    <div className="card" onClick={flippCard1}>
                        <p>Ser marca #1 en calzado de cuero y ser reconocida por la personalizacion y expresion de tu ser por medio de nuestros productos.</p>
                    </div>
                </ReactCardFlip>
            </div> 
        </div>
        <div className="products" id="products">
            <h2>Productos</h2>
            <Products />
        </div>
        
        <div className="vendors" id="vendors">
            <h2>Proveedores</h2>
            <Vendors />
        </div>
        <div className="clients" id="clients">
            <h2>Clientes</h2>
            <Clients />
        </div>

        <div className="footer">
            <div className="contact" id="contact"> 
            <h2>Contacto</h2>
            <ul>
                <li>Direccion: Avenida Federal 1-43 Zona 1 Mixco</li>
                <li>Numero de telefono: 31526835</li>
                <li>Correo: diego131322@gmail.com </li>
            </ul>
        </div>
            <p>
                Conocereis la verdad y la verdad los hara libres.
            </p>

        </div>
        </>
    );
};
export default TopNav;