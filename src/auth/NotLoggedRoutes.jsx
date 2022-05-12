import React, { useContext } from "react";
import {AuthContext} from "./AuthContext";
import { Navigate } from "react-router-dom";

const NotLoggedRoutes = ({ children }) => {
    const ctx = useContext(AuthContext);
    const { authState } = ctx;
    if (!authState.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/home" />;
    };
}
export default NotLoggedRoutes;