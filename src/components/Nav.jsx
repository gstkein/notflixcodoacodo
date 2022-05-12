import React, { useEffect, useState, useContext } from 'react'
import logo from "../img/Notflix_logo.png"
import avatar from "../img/Netflix_avatar.png"
import './Nav.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

function Nav() {

    const ctx = useContext(AuthContext);

    const { authState, dispatch } = ctx;
    let navigate = useNavigate();

    const logout = () => {
        dispatch({
          type: types.AUTH.LOGOUT,
        });
        navigate("/login");
      };

    const [show,setShow] = useState(false);

    const scrollEventListener = () => {
        if (window.scrollY > 100) {
               setShow(true);
        } else {setShow(false);}
        };


    useEffect(() => {
        
        window.addEventListener("scroll", scrollEventListener);
            return () => {
                window.removeEventListener("scroll",scrollEventListener);
            };
    },[]);

  return (

        <div className={`nav ${show && "nav_black"} `}>
            <img className="nav_logo" src={logo} alt="Notflix logo" />
            <img className="nav_avatar" src={avatar} alt="Notflix avatar" onClick={logout} />
            <span className='nav_username'>{authState.user && `${authState.user}`}</span>
        </div>


  )
}

export default Nav