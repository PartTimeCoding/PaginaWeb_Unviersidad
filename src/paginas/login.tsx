import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../utilidades/login";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ usuario: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { usuario, password } = formData;

    if (!usuario || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await iniciarSesion(usuario, password);

      // Guardar token en localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("usuario", response.usuario);
      localStorage.setItem("idEstudiante", response.idEstudiante);

      setError(null);
      navigate("/Inscripcion"); // Redirige donde quieras
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
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
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          Iniciar Sesión
        </h2>

        {error && (
          <div
            style={{
              color: "#ff4d4f",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            name="usuario"
            placeholder="Usuario"
            value={formData.usuario}
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

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
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
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
