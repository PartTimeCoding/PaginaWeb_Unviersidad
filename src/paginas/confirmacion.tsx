import { useNavigate } from "react-router-dom";

const Confirmacion = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0f4f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        paddingTop: "80px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Página 4: Panel del Estudiante
        </h2>

        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #c3e6cb",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          ¡Registro Completo! Bienvenido a la Universidad.
        </div>

        <h3 style={{ marginBottom: "10px" }}>Tus Cursos Inscritos</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                Código
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                Nombre del Curso
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                Horario
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                Créditos
              </th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>
                Profesor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                CS101
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Introducción a la Programación
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Lun/Mié 10:00–11:30 AM
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>3</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Dr. Smith
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                MATH201
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Cálculo I
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Mar/Jue 1:00–2:30 PM
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>4</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                Dr. Johnson
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion;
