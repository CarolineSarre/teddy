import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchClients = async () => {
  const response = await axios.get(`${API_URL}/clients`);
  return response.data;
};

export const addClient = async (name: string) => {
  const response = await axios.post(`${API_URL}/clients`, { name });
  return response.data;
};

export const deleteClient = async (id: number) => {
  const response = await axios.delete(`${API_URL}/clients/${id}`);
  return response.data;
};

export const updateClient = async (id: number, name: string) => {
  const response = await axios.put(`${API_URL}/clients/${id}`, { name });
  return response.data;
};
