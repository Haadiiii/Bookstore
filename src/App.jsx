import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/book" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
