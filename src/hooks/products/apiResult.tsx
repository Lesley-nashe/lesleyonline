import  { useEffect, useState } from "react";

export const useApiResult = (request: any) => {
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setTimeout(() => {
            setIsLoading(false)
          }, 3000);
          setError('');
        } else {
          setError(await response.json());
        }
      })
      .catch((err) => {
        console.log(err)
        setError(err.message);
        setTimeout(() => {
          setIsLoading(false)
        }, 3000);
      });
  }, [request]);
  
  return {results, isLoading, error};
};
