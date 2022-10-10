import React from "react";
import "./styles/App.css";
import Articles from "./pages/Articles";
import Products from "./components/Products";
import Login from './pages/Login'
import Home from "./pages/Home";
import Maintab from './pages/Maintab'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      
       <Route path="products" element={<Products/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="articles" element={<Articles/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="maintab" element={<Maintab/>}/>
      </Routes>
    </div>
  );
}

export default App;
