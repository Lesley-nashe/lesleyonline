import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useDeleteProduct = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const deleteProduct = async (id: String) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:8080/product/${id}`,{
            method: 'Delete',
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
        })
        if(!response.ok){
            setIsLoading(false);
            setError(error);
        }
        if(response.ok){
            navigate(`/`);
            toast({
                title: "Product Deleted",
                description: "Product Deleted",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              });
        }
    }
    return { deleteProduct, isLoading, error }
}