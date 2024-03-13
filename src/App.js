import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './Perfil';
import Contacto from './Contacto'; // Importa el componente Contacto
import Publicaciones from './Publicaciones'; // Importa el componente Publicaciones
import './App.css'; // Asumiendo que tienes un archivo de estilos CSS para App

const usuario = {
  nombre: 'migueel.saez',
  edad: 20,
  email: 'migueel.saez@gmail.com',
  ubicacion:'Albacete',
  presentacion:'El maximo de maximos',
  seguidores:1000,
  seguidos:580,
  publicaciones:6,
  telefono:123456789,
};

const initialFollowing = true;

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/perfil" element={<UserProfile usuario={usuario}  />} />
          <Route path="/contacto" element={<Contacto usuario={usuario} initialFollowing={initialFollowing}/>} />
          {/* Agrega la ruta para Publicaciones */}
          <Route path="/publicaciones" element={<Publicaciones usuario={usuario} initialFollowing={initialFollowing} />} />
        </Routes>
        <nav>
          <ul className='lista'>
            <li className='link'>
              <Link to="/perfil">Perfil de tu persona favorita</Link>
            </li>
            <li className='link'>
              <Link to="/publicaciones">Publicaciones de tu persona favorita</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default App;
