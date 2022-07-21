import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import '../css/Main.css'

const Layout = () => {
 return (
 <>
 <Navbar />
 <Outlet />
 <Footer />
 </>
 );
};

export default Layout;