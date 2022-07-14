import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <switch>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<CustomersList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}
