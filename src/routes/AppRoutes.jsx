import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "../views/Home";
import  Login  from "../views/Login";
import  ProtectedRoutes from "../auth/ProtectedRoutes";
import NotLoggedRoutes from "../auth/NotLoggedRoutes";
import { AuthProvider } from "../auth/AuthContext";


function AppRoutes() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<NotLoggedRoutes><Login /></NotLoggedRoutes>} />
          <Route
          path="*" element= {         
              <ProtectedRoutes>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/home" element={<Home/>} />
                </Routes>
              </ProtectedRoutes>
          }
          />
        </Routes>
        </BrowserRouter>
        </AuthProvider>


  );
}
export default AppRoutes;

