import React, { useContext } from "react";
import {AuthContext} from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const ctx = useContext(AuthContext);
    const { authState } = ctx;
    if (authState.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />;
    };
}
export default ProtectedRoutes;