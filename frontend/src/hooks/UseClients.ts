import { useEffect, useState } from "react";
import { Client } from "../interfaces/client";
import { getClients } from "../services/clients";

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (err) {
        console.error("Error fetching clients:", err);
        setError("Failed to fetch clients. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);
  return { clients, loading, error };
};
