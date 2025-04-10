import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistroNuevo from "./paginas/registroNuevo";
import Login from "./paginas/login";
import Confirmacion from "./paginas/confirmacion";
import SeleccionCursos from "./paginas/SeleccionCursos";
import ConfirmacionFinal from "./paginas/ConfirmacionFinal";
import Inscripcion from "./paginas/inscripcion";

import "./App.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="imagenAlumnos">
        <img
          src="src/assets/images/classroom-2787754_1920.jpg"
          alt="clase"
        />
        <p>¡Matricúlate Ya!</p>
      </div>

      <div className="panelBotones">
        <div>
          <p>
            Si ya te registraste en el sistema, dale click aquí para Iniciar
            Sesión y matricular tus cursos:
          </p>
          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>
        </div>

        <div>
          <p>
            Si aún no te has registrado, puedes hacerlo aquí para empezar a
            matricular tus cursos:
          </p>
          <Link to="/registro-nuevo">
            <button>Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registro-nuevo" element={<RegistroNuevo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/seleccion-cursos" element={<SeleccionCursos />} />
        <Route path="/confirmacion-final" element={<ConfirmacionFinal />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>
    </Router>
  );
};

export default App;
