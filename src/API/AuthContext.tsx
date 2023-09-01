import React,{createContext} from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}) => {
  <AuthContext.Provider value="테스트">{children}</AuthContext.Provider>
};
