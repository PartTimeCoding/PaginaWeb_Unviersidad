import axios, { AxiosError } from 'axios';

// Aquí puedes cambiar la URL base de acuerdo a tu configuración
const API_URL = 'http://localhost:3000/api/usuarios'; 

export const registrarUsuario = async (formData: any) => {
  try {
    console.log("Enviando datos al backend:", formData); 
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;  // Retorna los datos de respuesta (mensaje, usuario, etc.)
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      // Si el error es una instancia de AxiosError, accedemos a la respuesta
      console.error("Error en el servidor:", error.response?.data); //
      throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    } else {
      // Si el error no es un AxiosError, lanzamos un error genérico
      throw new Error('Error desconocido al registrar el usuario');
    }
  }
};