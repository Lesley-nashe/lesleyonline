import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useApiResult = (request: any) => {
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setError('');
        } else {
          setError(await response.json());
        }
      })
      .catch((err) => {
        console.log(err)
        setError(err.message);
      });
  }, [request]);
  
  return results ||  error;
};
