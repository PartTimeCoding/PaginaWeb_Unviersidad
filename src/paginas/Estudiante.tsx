// src/pages/Estudiante.tsx
import { useEffect, useState } from "react";
import axios from "axios";

interface Curso {
  idCurso: number;
  nombreCurso: string;
  descripcion: string;
  profesorCurso: string;
  horarioCurso: string;
}

const Estudiante = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    const idEstudiante = localStorage.getItem("idEstudiante");
    if (!idEstudiante) return;
  
    axios.get(`http://localhost:3000/api/inscripciones/estudiante/${idEstudiante}`)
      .then((res) => setCursos(res.data))
      .catch((err) => console.error("Error al cargar cursos:", err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cursos Inscritos</h2>
      <ul className="space-y-4">
        {cursos.length === 0 ? (
          <p>No estás inscrito en ningún curso.</p>
        ) : (
          cursos.map(curso => (
            <li key={curso.idCurso} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{curso.nombreCurso}</h3>
              <p><strong>Profesor:</strong> {curso.profesorCurso}</p>
              <p><strong>Horario:</strong> {curso.horarioCurso}</p>
              <p><strong>Descripción:</strong> {curso.descripcion}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Estudiante;