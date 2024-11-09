import { useState } from "react";

export const useProduct = () => {
  const [error, setError] = useState(null);
  const [resProduct, setResProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const product = async (id: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:8080/product/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      console.log(json);
      setIsLoading(false);
      setError(null);
      setResProduct(json);
    }
    console.log(response);

    if (!response.ok) {
      setIsLoading(false);
      setError(error);
    }
  };
  return { product, isLoading, error, resProduct };
};
export default useProduct;
