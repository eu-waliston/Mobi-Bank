import React from "react";
import "../Login/Login.scss";

import { useForm } from "react-hook-form";

const Recover = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="Login__Component">
      <div className="left--side">
        <img src="/Assets/mobi.png" alt="Bank Logo" className="bank__logo" />
      </div>

      <div className="right--side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Recover Here!</h1>

          <input
            {...register("example", { required: true })}
            placeholder="Email"
            type="email"
          />
          {errors.exampleRequired && (
            <span className="warn">This field is required</span>
          )}
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Recover;
