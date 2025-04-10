import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeleccionCursos.css";

const cursosDisponibles = [
  {
    id: "CS101",
    nombre: "Introducción a la Programación",
    creditos: 3,
    horario: "Lun/Mié 10:00–11:30 AM",
  },
  {
    id: "MATH201",
    nombre: "Cálculo I",
    creditos: 4,
    horario: "Mar/Jue 1:00–2:30 PM",
  },
];

const SeleccionCursos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [cursosSeleccionados, setCursosSeleccionados] = useState<string[]>([]);
  const navigate = useNavigate();

  const cursosFiltrados = cursosDisponibles.filter((curso) =>
    `${curso.id} ${curso.nombre}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarCurso = (id: string) => {
    if (!cursosSeleccionados.includes(id)) {
      setCursosSeleccionados([...cursosSeleccionados, id]);
    }
  };

  return (
    <div className="seleccion-container">
      <div className="seleccion-wrapper">
        <h2 className="seleccion-titulo">Página 3: Selección de Cursos</h2>

        {/* Búsqueda */}
        <div className="seleccion-busqueda">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="seleccion-input"
          />
          <button className="seleccion-boton">Buscar</button>
        </div>

        {/* Lista de cursos */}
        <h3>Cursos Disponibles</h3>
        {cursosFiltrados.length === 0 ? (
          <p style={{ color: "#999", fontStyle: "italic", marginTop: "10px" }}>
            No se encontraron cursos con ese nombre.
          </p>
        ) : (
          cursosFiltrados.map((curso) => (
            <div key={curso.id} className="seleccion-curso">
              <div>
                <strong>
                  {curso.id}: {curso.nombre}
                </strong>
                <br />
                <span className="seleccion-curso-info">
                  Créditos: {curso.creditos} | {curso.horario}
                </span>
              </div>
              <button
                onClick={() => agregarCurso(curso.id)}
                className="seleccion-curso-boton"
              >
                Agregar
              </button>
            </div>
          ))
        )}

        {/* Botones abajo */}
        <div className="seleccion-botones">
          <button onClick={() => navigate("/registro")} className="boton-atras">
            Atrás
          </button>
          <button
            onClick={() => navigate("/confirmacion")}
            className="boton-completar"
          >
            Completar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeleccionCursos;
