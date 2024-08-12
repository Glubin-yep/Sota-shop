import { useState } from "react";

import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ShopPage from "./components/ShopPage/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/auth/registration" element={<Registration />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
