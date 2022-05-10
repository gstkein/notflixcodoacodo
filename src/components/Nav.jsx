import React, { useEffect, useState } from 'react'
import logo from "../img/Notflix_logo.png"
import avatar from "../img/Netflix_avatar.png"
import './Nav.css';

function Nav() {

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
            <img className="nav_avatar" src={avatar} alt="Notflix avatar" />
        </div>


  )
}

export default Nav