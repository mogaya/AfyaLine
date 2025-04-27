import api from "../lib/axios";
import { Client } from "../interfaces/client";

export const getClients = async () => {
  const response = await api.get<Client[]>("/clients/");
  return response.data;
};

export const getClient = async (id: number) => {
  const response = await api.get<Client>(`/clients/${id}/`);
  return response.data;
};
