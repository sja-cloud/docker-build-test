import React from "react";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from "./pages/Articles";
import Products from "./components/Products";
import Login from './pages/Login'
import Home from "./pages/Home";
import Maintab from './pages/Maintab'
import { useState } from "react";
import Test from "./pages/Test";
import Data from "./pages/Data";
import { Routes, Route, Link, Redirect } from "react-router-dom";

function App() {
  const [isLoggedin, setisLoggedin] = useState(true);


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
     
       <Route path="products" element={<Products/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="articles" element={<Articles/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="maintab" element={<Maintab/>}/>
       <Route path="test" element={<Test/>}/>
       <Route path="data" element={<Data/>}/>
      </Routes>
    </div>
  );
}

export default App;
