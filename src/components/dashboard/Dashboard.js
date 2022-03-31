import { Routes, Route } from "react-router-dom";
import React from 'react';
import { Login } from "../login/Login";
import { ItemComponent } from "../items/ItemComponent";
import { NavBar } from "./NavBar";
import { Home } from "../Home";
import { ItemScreen } from "../items/ItemScreen";
import { ItemCreation } from "../items/ItemCreation";
import { ItemEdit } from "../items/ItemEdit";
import { ItemUpdatedScreen } from "../items/ItemUpdatedScreen";
import { ItemDeactivatedScreen } from "../items/ItemDeactivatedScreen";
import { AdminScreen } from "../admin/AdminScreen";

export default function Dashboard() {
 

  return (
    <div>
      <NavBar/>     
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/products" element ={<ItemComponent/>} />
        <Route path="/products/:itemId" element ={<ItemScreen/>} />
        <Route path="/products/edit/:itemId" element ={<ItemEdit/>} />
        <Route path="/products/new" element ={<ItemCreation/>} />
        <Route path="/products/updated" element ={<ItemUpdatedScreen/>} />
        <Route path="/products/deactivated" element ={<ItemDeactivatedScreen/>} />
        <Route path="/admin" element ={<AdminScreen/>} />
        
      </Routes>
    </div>

  );
}