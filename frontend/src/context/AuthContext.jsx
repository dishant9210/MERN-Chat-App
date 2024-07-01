import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}
 
export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
      const user = localStorage.getItem("chat-user");
      return user ? JSON.parse(user) : null;
    });
  
    return (
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
      </AuthContext.Provider>
    );
  };