import logo from './logo.svg';
import './App.css';

import ecuavoley from './imagenes/ecuavoley.jpg'
import pelea from './imagenes/pelea.jpg'
import natacion from './imagenes/natacion.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

{/*MIS DATOS PERSONALES */}
        <h2>Mis Datos Personales</h2>
        <p><strong>Nombre:</strong> Daniel Andres Diaz Bedon</p>
        <p><strong>Dirección:</strong> Ciudad Bicentenario</p>
        <p><strong>Teléfono:</strong> 0962050285</p>
        <p><strong>Correo Electrónico:</strong> daniel.diaz01.epn.edu.ec</p>
{/*MIS DATOS PERSONALES */}


{/*MIS ESTUDIOS RELIZADOS */}
<h2>Lista de mis Estudios Realizados</h2>
        <ol>
          <li>Estudio : curso de administracion financiera</li>
          <li>Estudio : Titulo de bachiller</li>
          <li>Estudio : curso de manejo ANETA</li>
          <li>Estudio : Diploma en proceso de kick boxing</li>
          <li>Estudio : Estudiando Desarrollo de Software</li>
        </ol>
{/*MIS ESTUDIOS RELIZADOS */}


{/*LISTA DE HERRAMIENTAS */}
<h2>Lista de Herramientas Utilizadas</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Git y GitHub</li>
          <li>Node.js</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>Vercell</li>
          <li>Spotify</li>
        </ul>
{/*LISTA DE HERRAMIENTAS */}


{/*FOTOS DEPORTES*/}
<h2>Mis Deportes Favoritos</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img src={ecuavoley} alt="Fútbol" />
            <h4>ECUAVOLEY</h4>
          </div>
          <div className="gallery-item">
            <img src={pelea} alt="Baloncesto" />
            <h4>Kick Boxing</h4>
          </div>
          <div className="gallery-item">
            <img src={natacion} alt="Tenis" />
            <h4>Natacion</h4>
          </div>
        </div>
{/*FOTOS DEPORTES*/}


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
