import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistroNuevo from "./paginas/registroNuevo";
import Login from "./paginas/login";
import Confirmacion from "./paginas/confirmacion";
import SeleccionCursos from "./paginas/SeleccionCursos";
import ConfirmacionFinal from "./paginas/ConfirmacionFinal";
import Inscripcion from "./paginas/inscripcion";
import Estudiante from "./paginas/Estudiante";

import "./App.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="imagenAlumnos">
        <img src="src/assets/images/classroom-2787754_1920.jpg" alt="clase" />
        <p>¡Matricúlate Ya!</p>
      </div>

      <div className="panelBotones">
        <div>
          <p>
            Si ya te registraste en el sistema, dale click aquí para Iniciar
            Sesión y matricular tus cursos:
          </p>
          <Link to="/login" className="login">
            Iniciar Sesión
          </Link>
        </div>
        <div>
          <p>
            Si todavía no te has registrado, dale click aquí para comenzar tu
            proceso de matrícula:
          </p>
          <Link to="/registro" className="registro">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="titulo">Sistema de Gestión de Universidades</div>
          <ul className="links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/Estudiante">Registro</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<RegistroNuevo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/cursos" element={<SeleccionCursos />} />
          <Route path="/ConfirmacionFinal" element={<ConfirmacionFinal />} />
          <Route path="/inscripcion" element={<Inscripcion/>} />
          <Route path="/Estudiante" element={<Estudiante/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
