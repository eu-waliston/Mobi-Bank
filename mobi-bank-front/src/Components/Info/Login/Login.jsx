import React from "react";
import "./Login.scss";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [cpf, setCpf] = React.useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    setCpf(data)
  }

  console.log(watch("example"));

  const handleClick = () => {
    if(cpf !== undefined ) {
      navigate("/bank/home/")
    }
  }

  return (
    <div className="Login__Component">
      <div className="left--side">
        <img src="/Assets/mobi.png" alt="Bank Logo" className="bank__logo" />
      </div>

      <div className="right--side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome Back!</h1>
          <input
            {...register("example", { required: true })}
            placeholder="CPF"
            type="text"
          />
          <input
            {...register("exampleRequired", { required: true })}
            placeholder="Password"
            type="password"
          />

          {errors.exampleRequired && (
            <span className="warn">This field is required</span>
          )}
          <br />
          <button type="submit" onClick={() => handleClick()}>Login</button>
          <p>
            don't have an account ?{" "}
            <Link to={"/bank/register/"} className="reg">
              register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
