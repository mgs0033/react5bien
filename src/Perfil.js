import React from 'react';
import './perfil.css';

const Perfil = ({ usuario }) => {
    return (
        <div>
            <header id='cabecera'>
                <h1>{usuario.nombre}</h1>
                <img id='foto1' src='fotos/cristiano.jpg' alt='Imagen de perfil'></img>
            </header>
            <div>
                <section>
                    <h2>Información Personal</h2>
                    <p className="datos1" id="div1">Nombre: {usuario.nombre}</p>
                    <p className="datos1" id="div2">Edad: {usuario.edad}</p>
                    <p className="datos1" id="div3">Ubicación: {usuario.ubicacion}</p>
                    <p className="datos1" id="div4">Presentacion: {usuario.presentacion}</p>
                </section>
            </div>
            <div>
                <section className="estadisticas">
                    <h2>Datos de {usuario.nombre}</h2><br />
                    <div className="datos">Seguidores: {usuario.seguidores}</div>
                    <div className="datos">Seguidos: {usuario.seguidos}</div>
                    <div className="datos">Publicaciones: {usuario.publicaciones}</div>
                </section>
            </div>
            <section className="audio">
                <h2>Audio</h2><br/>
                <audio controls>
                    <source src="audio/Como te enganche te voy a enganchar bien enganchao_5kQY-n1ItOw.mp3" type="audio/mp3"/>
                </audio>
                <h2>Video</h2><br/>
                <video controls>
                    <source src="video/SaveTube.io-Zidane Best Control.mp4" type="video/mp4"/>
                </video>
            </section>
        </div>
    );
};

export default Perfil;
