import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateProduct = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const createProduct = async (
    name: String,
    description: String,
    price: Number,
    inventoryCount: Number
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:8080/product`, {
      method: "Post",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, description, price, inventoryCount }),
    });
    if (!response.ok) {
      setIsLoading(false);
      setError(error);
    }
    if (response.ok) {
      navigate(`/`);
      toast({
        title: "Product Created",
        description: "Product Created",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return { createProduct, isLoading, error };
};
