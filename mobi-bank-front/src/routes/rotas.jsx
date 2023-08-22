import { Routes, Route } from "react-router-dom";

import Login from "../Components/Info/Login/Login";
import Register from "../Components/Info/Register/Register";
import Recover from "../Components/Info/Recover/Recover";



const AllRoutes = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/bank/register/" element={<Register />} />
        <Route exact path="/bank/recover/" element={<Recover />} />

      </Routes>
    );
  };
  
  export default AllRoutes;
