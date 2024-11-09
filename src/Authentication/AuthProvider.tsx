import { createContext, useState } from "react";
import { User } from "../helpers";

const initialUser: User = { email: "", username: "", Id: "" };

export const AuthContext = createContext({
  isLoading: false,
  error: false,
  isAuthenticated: false,
  currentUser: initialUser,
  login: (username: string, password: string) => {},
  signOut: () => {},
});

export const AuthWrapper = ({ children }: { children: any }) => {

  const [currentUser, setCurrentUser] = useState(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const login = async (email: string, password: string ) => {

    setIsLoading(true);

    const response = await fetch('http://localhost:8080/auth/login',{
        method: 'Post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    const json = await response.json()
    if(!response.ok)
      {
        setIsLoading(false);
        setError(true);
        setIsAuthenticated(false);
      }
    console.log(json)
    if(response.ok)
        { 
        const user = {
            email: json.user.email,
            username: json.user.username,
            Id:json.user._id
        }
        localStorage.setItem('user', JSON.stringify(user))
        document.cookie =`TADIWA-AUTH=${json.user.authentication.sessionToken};Path=/; Domain=localhost;`;
        setCurrentUser(user)
        setIsLoading(false)
        setError(false);
        setIsAuthenticated(true);
    }
  }

  const signOut = () => {
    setIsLoading(true)
    setIsAuthenticated(false);
    setCurrentUser({ email: "", username: "", Id: "" });
    localStorage.clear()
    document.cookie =`TADIWA-AUTH= ;Path=/; Domain=localhost;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    setIsLoading(false)
  };

  return (
    <AuthContext.Provider value={{error, isLoading, isAuthenticated, currentUser, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;

