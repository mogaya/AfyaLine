import api from "../lib/axios";
import { Client } from "../interfaces/client";
import { ClientFormData } from "../components/Client/ClientForm";

export const getClients = async () => {
  const response = await api.get<Client[]>("/clients/");
  return response.data;
};

export const getClient = async (id: number) => {
  const response = await api.get<Client>(`/clients/${id}/`);
  return response.data;
};

export const createClient = async (clientData: ClientFormData) => {
  const response = await api.post<ClientFormData>("/clients/", clientData);
  return response.data;
};
