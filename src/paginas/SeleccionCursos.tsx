import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeleccionCursos.css";

interface Curso {
  idCurso: number;
  nombreCurso: string;
  creditos: number;
  horarioCurso: string;
}

const SeleccionCursos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [cursosSeleccionados, setCursosSeleccionados] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/cursos")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data);
      })
      .catch((error) => {
        console.error("Error al obtener cursos:", error);
      });
  }, []);

  const cursosFiltrados = cursos.filter((curso) =>
    `${curso.idCurso} ${curso.nombreCurso}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarCurso = (id: number) => {
    if (!cursosSeleccionados.includes(id)) {
      setCursosSeleccionados([...cursosSeleccionados, id]);
    }
  };

  const [nuevoCurso, setNuevoCurso] = useState({
    nombreCurso: "",
    descripcion: "",
    profesorCurso: "",
    horarioCurso: "",
    creditos: 0
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNuevoCurso({ ...nuevoCurso, [name]: value });
  };
  
  const crearCurso = () => {
    fetch("http://localhost:3000/api/cursos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoCurso),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Curso creado exitosamente.");
        setCursos([...cursos, data]);
        setNuevoCurso({
          nombreCurso: "",
          descripcion: "",
          profesorCurso: "",
          horarioCurso: "",
          creditos: 0,
        });
      })
      .catch((error) => {
        console.error("Error al crear curso:", error);
      });
  };
  

  return (
    <div className="seleccion-container">
      <div className="seleccion-wrapper">
        <h2 className="seleccion-titulo">Página 3: Selección de Cursos</h2>

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

        <h3>Cursos Disponibles</h3>
        {cursosFiltrados.length === 0 ? (
          <p style={{ color: "#999", fontStyle: "italic", marginTop: "10px" }}>
            No se encontraron cursos con ese nombre.
          </p>
        ) : (
          cursosFiltrados.map((curso) => (
            <div key={curso.idCurso} className="seleccion-curso">
              <div>
                <strong style={{color: "black"}}>
                  {curso.idCurso}: {curso.nombreCurso}
                </strong>
                <br />
                <span className="seleccion-curso-info">
                  Créditos: {curso.creditos} | Horario: {curso.horarioCurso}
                </span>
              </div>
              <button
                onClick={() => agregarCurso(curso.idCurso)}
                className="seleccion-curso-boton"
              >
                Agregar
              </button>
            </div>
          ))
        )}

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
      <h3 className="titulo-formulario">Agregar Nuevo Curso</h3>
<div className="form-nuevo-curso">
  <input
    type="text"
    name="nombreCurso"
    placeholder="Nombre del curso"
    value={nuevoCurso.nombreCurso}
    onChange={handleChange}
  />
  <textarea
    name="descripcion"
    placeholder="Descripción"
    value={nuevoCurso.descripcion}
    onChange={handleChange}
  />
  <input
    type="text"
    name="profesorCurso"
    placeholder="Profesor"
    value={nuevoCurso.profesorCurso}
    onChange={handleChange}
  />
  <input
    type="time"
    name="horarioCurso"
    placeholder="Horario"
    value={nuevoCurso.horarioCurso}
    onChange={handleChange}
  />
  <input
    type="number"
    name="creditos"
    placeholder="Créditos"
    value={nuevoCurso.creditos}
    onChange={handleChange}
  />
  <button onClick={crearCurso}>Crear Curso</button>
</div>

    </div>
  );
};

export default SeleccionCursos;
