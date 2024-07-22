import { useState } from "react";

export const useCheckout = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const checkout = async (price:number, userId: string, products: any ) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8080/orders',{
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({price, userId, products})
        })

        if(!response.ok){
            setIsLoading(false);
            setError(error);
        }
        if(response.ok){
            localStorage.removeItem('cart')
        }

    }

    return { checkout, isLoading, error }
}