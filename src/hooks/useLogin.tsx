import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useAuthContext()

    const login = async (email: string, password: string ) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8080/auth/login',{
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false);
            setError(error);
        }
        if(response.ok){
            const user = {
                email: json.user.email ,
                username: json.user.username,
                Id:json.user._id
            }
            localStorage.setItem('user', JSON.stringify(user))
            document.cookie =`TADIWA-AUTH=${json.user.authentication.sessionToken};Path=/; Domain=localhost;`;
            dispatch({type: 'Login', user: json.user})
            navigate("/");
            navigate(0)
        }
    }

    return { login, isLoading, error }
}

export const useLogout = () => {
    const navigate = useNavigate();
    const {dispatch} = useAuthContext()

    const logout = async () => {
            localStorage.clear()
            document.cookie =`TADIWA-AUTH= ;Path=/; Domain=localhost;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
            dispatch({type: 'Logout', user: {}})
            navigate("/login");
    }
    return { logout }
}