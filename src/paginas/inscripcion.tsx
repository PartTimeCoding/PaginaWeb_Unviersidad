import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Inscripcion = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    idEstudiante: "",
    idCurso: "",
    FechaInscripcion: "",
    estadoInscripcion: "activo"
  });

  const [cursos, setCursos] = useState([]);
  const [boleta, setBoleta] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener cursos disponibles
    axios.get("http://localhost:3000/api/cursos")
      .then(res => setCursos(res.data))
      .catch(err => console.error("Error al cargar cursos", err));

    // Obtener ID del estudiante desde localStorage si existe
    const idEstudianteGuardado = localStorage.getItem("idEstudiante");
    if (idEstudianteGuardado) {
      setFormData(prev => ({ ...prev, idEstudiante: idEstudianteGuardado }));
      obtenerBoleta(idEstudianteGuardado);
    }
  }, []);

  const obtenerBoleta = async (idEstudiante: string) => {
    try {
      const res = await axios.post("http://localhost:3000/api/inscripciones", {
        ...formData,
        FechaInscripcion: new Date().toISOString().split("T")[0]
      });
      setBoleta(res.data);
    } catch (err) {
      console.error("Error al obtener boleta", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { idEstudiante, idCurso } = formData;
    if (!idEstudiante || !idCurso) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/inscripciones", {
        ...formData,
        FechaInscripcion: new Date().toISOString().split("T")[0]
      });

      setError(null);
      alert("Inscripción realizada con éxito.");
      setFormData(prev => ({ ...prev, idCurso: "" }));

      // Actualizar boleta después de inscribir
      obtenerBoleta(formData.idEstudiante);
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al inscribir.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#f4f4f4",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          Inscripción de Cursos
        </h2>

        {error && (
          <div style={{ color: "#ff4d4f", marginBottom: "15px", textAlign: "center", fontSize: "14px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            name="idEstudiante"
            placeholder="ID del Estudiante"
            value={formData.idEstudiante}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
              fontSize: "14px",
            }}
          />

          <select
            name="idCurso"
            value={formData.idCurso}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
              fontSize: "14px",
            }}
          >
            <option value="">Selecciona un curso</option>
            {cursos.map((curso: any) => (
              <option key={curso.idCurso} value={curso.idCurso}>
                {curso.nombreCurso}
              </option>
            ))}
          </select>

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Inscribirse
          </button>
        </form>
      </div>

      {/* 🔽 BOLETA DE CURSOS MATRICULADOS */}
      {boleta.length > 0 && (
        <div style={{ marginTop: "40px", maxWidth: "700px", marginInline: "auto" }}>
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Boleta de Cursos Matriculados</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "#fff" }}>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>Curso</th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>Créditos</th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>Horario</th>
                <th style={{ padding: "10px", border: "1px solid #ccc" }}>Profesor</th>
              </tr>
            </thead>
            <tbody>
              {boleta.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.nombreCurso}</td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.creditos}</td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.horarioCurso}</td>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>{item.profesorCurso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Inscripcion;