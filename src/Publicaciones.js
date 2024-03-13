import React, { useState } from 'react';
import './publicaciones.css';

const Publicaciones = ({ usuario, initialFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <div>
            <header id='cabecera'>
                <h1>{usuario.nombre}</h1>
                <h3>{usuario.seguidores}</h3>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                        <span className='tw-followCard-stopFollow'></span>
                    </button>
                </aside>
                <img id='foto1' src='fotos/cristiano.jpg' alt='Imagen de perfil'></img>
            </header>
            <section id="publicacion1">
                <img id="foto1" src="fotos/foto1.png" alt='Foto 1'></img>
                <p id="titulo1"><b>{usuario.nombre}</b> Fiestaaa</p>
            </section>
            <section id="publicacion2">
                <img id="foto2" src="fotos/foto2.jpg" alt='Foto 2'></img>
                <p id="titulo2"><b>{usuario.nombre}</b> Solo ante la gente</p>
            </section>
            <section id="publicacion3">
                <img id="foto3" src="fotos/foto3.jpg" alt='Foto 3'></img>
                <p id="titulo3"><b>{usuario.nombre}</b> Asimilando</p>
            </section>
            <section id="publicacion4">
                <img id="foto4" src="fotos/foto4.jpg" alt='Foto 4'></img>
                <p id="titulo4"><b>{usuario.nombre}</b> Viviendo</p>
            </section>
            <section id="publicacion5">
                <img id="foto5" src="fotos/foto5.jpg" alt='Foto 5'></img>
                <p id="titulo5"><b>{usuario.nombre}</b> Con mi gente</p>
            </section>
            <section id="publicacion6">
                <img id="foto6" src="fotos/foto6.jpg" alt='Foto 6'></img>
                <p id="titulo6"><b>{usuario.nombre}</b> Feliz</p>
            </section>
        </div>
    );
}

export default Publicaciones;
