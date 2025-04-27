import { useEffect, useState } from "react";
import { Program } from "../interfaces/program";
import { getPrograms } from "../services/programs";

export const UsePrograms = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [progLoading, setProgLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await getPrograms();
        setPrograms(data);
      } catch (err) {
        console.error("Error fetching programs:", err);
        setError("Failed to fetch programs. Please try again later.");
      } finally {
        setProgLoading(false);
      }
    };

    fetchPrograms();
  }, []);
  return { programs, progLoading, error };
};
