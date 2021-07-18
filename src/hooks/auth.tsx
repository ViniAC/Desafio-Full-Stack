import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
interface SignInCredentials {
  name: string;
  password: string;
}

interface AuthState {
  user?: string;
  token?:string
}

interface AuthContextData {
  user?: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() =>{
    const token = localStorage.getItem("@frontend:token");
    const user = localStorage.getItem("@frontend:user");

    api.defaults.headers.common['Authorization'] = `Basic ${token}`;
    
    if (token) {
      const decodedToken = base64_decode(token);
      if (decodedToken && user){
        console.log(token)
        return { token, user: user};
      }
    }
    return {} as AuthState
  });

  const signIn = useCallback(async ({ name, password }) => {
    await api.post("/users", {
      nome:name,
      senha:password,
    });
    const newToken = `Basic ${base64_encode(`${name}:${password}`)}`;

    api.defaults.headers.authorization = newToken;
    api.defaults.headers.common['Authorization'] = newToken;

    localStorage.setItem("@frontend:token", base64_encode(`${name}:${password}`));
    localStorage.setItem("@frontend:user", name);
    


    console.log(newToken);
    setData({ user:name,token:password });
    
  }, []);
  const signOut = useCallback(() => {
    setData({} as AuthState);
  }, []);

  return (
    <>
      {data ? (
        <AuthContext.Provider
          value={{ user: data.user,signIn, signOut }}
        >
          {children}
        </AuthContext.Provider>
      ) : (
        <AuthContext.Provider
          value={{ user: "", signIn, signOut }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
