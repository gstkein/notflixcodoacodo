import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import useForm from "../hooks/useForm";


const Login = () => {
  const ctx = useContext(AuthContext);
  const { authState, dispatch } = ctx;
  let navigate = useNavigate();
  const [form, handleChange] = useForm();

  const login = () => {
    dispatch({
      type: types.AUTH.LOGIN,
      payload: {
        user: form.name,
      },
    });
    navigate("/home");
  };

  return (
    <>
      <div>Login</div>
      <form>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
          />
      </form>
      <button onClick={login}>Login</button>
      <p>{authState.user && `${authState.user}`}</p>   
    </>
  );
};

export default Login;
