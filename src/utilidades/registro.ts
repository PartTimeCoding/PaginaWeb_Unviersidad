import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:3000/api/usuarios'; 

export const registrarUsuario = async (formData: any) => {
  try {
    console.log("Enviando datos al backend:", formData); 
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Error en el servidor:", error.response?.data); //
      throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    } else {
      throw new Error('Error desconocido al registrar el usuario');
    }
  }
};