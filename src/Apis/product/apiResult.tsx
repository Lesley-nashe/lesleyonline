import { useEffect, useState } from "react";

export const useApiResult = (request: any) => {
  const [results, setResults] = useState<any>();
  const [error, setError] = useState<string>('');
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(request);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
        setError('');
      } catch (Error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (request) {
      fetchData();
    }

    return () => {
      // Cleanup or additional actions on unmount can be added here if needed
    };
  }, [request]);

  return { results, loading, error };
};
