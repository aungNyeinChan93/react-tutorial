import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./NavbarComponent/Home";
import Contact from "./NavbarComponent/Contact";
import About from "./NavbarComponent/About";
import Product from "./NavbarComponent/Product";
import Login from "./NavbarComponent/Login";
import ErrorPage from "./NavbarComponent/ErrorPage";
import Dashboard from "./NavbarComponent/Dashboard";
import UserPage from "./NavbarComponent/UserPage";
import ProfilePage from "./NavbarComponent/Profilepage";
import ShareLayout from "./NavbarComponent/ShareLayout";

const ReactRouterDom = () => {
  return (
    <div className="ReactRouterDom bg-info-subtle min-vh-100 container-fluid">
      <h4 className="ReactRouterDom-title text-warning fs-4 text-center text-capatalize p-2 bg-white shadow-sm rounded">
        React Router Dom
      </h4>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="userpage" element={<UserPage />} />
              <Route path="profilepage" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouterDom;
