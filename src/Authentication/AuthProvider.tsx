import { useContext, createContext, useState, FC } from "react";
import { useNavigate } from "react-router-dom";

type loginData = {
    email: String,
    password: String
}

interface AuthProviderProps {
    children: React.ReactNode;
  }

  const AuthContext = createContext<{
    token: string;
    user: any | null;
    loginAction: (data: loginData) => Promise<void>;
    logOut: () => void;
  }>({
    token: '',
    user: null,
    loginAction: async () => {},
    logOut: () => {},
  });


const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data: loginData) => {
    try {
        console.log(data)
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      if (res.user) {
        console.log(res.user)
        setUser(res.user);
        setToken(res.user.authentication.sessionToken);
        localStorage.setItem("site", res.user.authentication.sessionToken);
        navigate("/products");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};