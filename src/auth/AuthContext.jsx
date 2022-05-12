import React, { createContext } from "react";
import { useReducer, useEffect } from "react";
import {authReducer,authInitState} from "./authReducer";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    let initialAuthState = authInitState;
    if (localStorage.getItem("authState")) {   
         initialAuthState = JSON.parse(localStorage.getItem("authState"));
    }
    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        localStorage.setItem("authState", JSON.stringify(authState)); 
    }, [authState]);
   
    return (
        <AuthContext.Provider value={{authState,dispatch,}}>
            {children}
        </AuthContext.Provider>
    )
}
