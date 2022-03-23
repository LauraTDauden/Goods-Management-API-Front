import { Routes, Route } from "react-router-dom";
import React from 'react';
import { Login } from "../login/Login";
import { ItemComponent } from "../items/ItemComponent";
import { NavBar } from "./NavBar";
import { Home } from "../Home";

export default function Dashboard() {
  return (
    <div>
      <NavBar/>     
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/products" element ={<ItemComponent/>} />
      </Routes>
    </div>

  );
}