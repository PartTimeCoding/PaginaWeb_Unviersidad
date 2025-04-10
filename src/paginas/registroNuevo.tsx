import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./RegistroNuevo.css";

const RegistroNuevo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    contrasena: "",
    fechaNacimiento: "",
    direccion: "",
    correo: "",
    telefono: "",
    carrera: "",
  });

  const [errores, setErrores] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    const {
      nombre,
      apellido,
      usuario,
      contrasena,
      fechaNacimiento,
      direccion,
      correo,
      telefono,
      carrera,
    } = formData;
    if (
      !nombre ||
      !apellido ||
      !usuario ||
      !contrasena ||
      !fechaNacimiento ||
      !direccion ||
      !correo ||
      !telefono ||
      !carrera
    ) {
      return "Todos los campos son obligatorios.";
    }
    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      return "Correo electrónico no válido.";
    }
    if (telefono.length < 8) {
      return "Teléfono debe tener al menos 8 dígitos.";
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validarFormulario();
    if (error) {
      setErrores(error);
    } else {
      setErrores(null);
      navigate("/confirmacion");
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-form-wrapper">
        <h2 className="registro-title">Registro</h2>

        {errores && <div className="registro-error">{errores}</div>}

        <form onSubmit={handleSubmit} className="registro-form">
          {[
            { name: "nombre", placeholder: "Nombre" },
            { name: "apellido", placeholder: "Apellido" },
            { name: "usuario", placeholder: "Usuario" },
            { name: "contrasena", placeholder: "Contraseña", type: "password" },
            { name: "fechaNacimiento", placeholder: "", type: "date" },
            { name: "direccion", placeholder: "Dirección" },
            { name: "correo", placeholder: "Correo Electrónico" },
            { name: "telefono", placeholder: "Teléfono" },
          ].map(({ name, placeholder, type = "text" }) => (
            <input
              key={name}
              name={name}
              placeholder={placeholder}
              type={type}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="registro-input"
            />
          ))}

          <select
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            className="registro-select"
          >
            <option value="">Seleccione una carrera</option>
            <option value="Ingeniería en Informática">
              Ingeniería en Informática
            </option>
            <option value="Administración de Empresas">
              Administración de Empresas
            </option>
            <option value="Derecho">Derecho</option>
          </select>

          <button type="submit" className="registro-button">
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroNuevo;
