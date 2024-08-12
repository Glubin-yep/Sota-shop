import "./App.css";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Error404 from "./components/ErrorPages/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/auth/registration" element={<Registration />} />
      <Route path="/auth/login" element={<Login />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
