import { Routes, Route } from "react-router-dom";

import Login from "../Components/Info/Login/Login";

const AllRoutes = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />

      </Routes>
    );
  };
  
  export default AllRoutes;
