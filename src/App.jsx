import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import store from "./redux/configureStore";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>
);

export default App;
