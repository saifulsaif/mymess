import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Product from "./Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;