import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useUpdateProduct = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const updateProduct = async (id: String, price: Number, inventoryCount: Number) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:8080/product/${id}`,{
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({price, inventoryCount})
        })
        if(!response.ok){
            setIsLoading(false);
            setError(error);
        }
        if(response.ok){
            navigate(`/products/${id}`);
            toast({
                title: "Product Updated",
                description: "Product Updated",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
        }
    }
    return { updateProduct, isLoading, error }
}