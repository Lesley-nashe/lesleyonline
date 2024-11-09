import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("You are using this beyond your limits");
  }

  return context;
};
