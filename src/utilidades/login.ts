import axios, { AxiosError } from "axios";

const API_URL = "http://localhost:3000/api/usuarios";

export const iniciarSesion = async (usuario: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { usuario, password });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    } else {
      throw new Error("Error desconocido al iniciar sesión");
    }
  }
};
