import { ProgramFormData } from "../components/Program/ProgramForm";
import { Program } from "../interfaces/program";
import api from "../lib/axios";

export const getPrograms = async () => {
  const response = await api.get<Program[]>("/programs/");
  return response.data;
};

export const getProgram = async (id: number) => {
  const response = await api.get<Program[]>(`/programs/${id}/`);
  return response.data;
};

export const createProgram = async (programData: ProgramFormData) => {
  const response = await api.post<ProgramFormData>("/programs/", programData);
  return response.data;
};
