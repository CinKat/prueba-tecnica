const API_URL = 'https://api.jsonbin.io/v3/b/63654b012b3499323bf58225';

// Función asincrónica para realizar peticion y obtener datos de una API.
export const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      const data = await response.json();
      return data.record;
    } catch (error) {
      console.error('Error:', error);
    }
};