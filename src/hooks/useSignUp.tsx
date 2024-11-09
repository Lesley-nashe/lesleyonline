import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError(false);

    const response = await fetch("http://localhost:8080/auth/register", {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    if (!response.ok) {
      setIsLoading(false);
      setError(error);
    }
    if (response.ok) {
      setIsLoading(true);
      setError(false);
      navigate("/login");
    }
  };

  return { signup, isLoading, error };
};
