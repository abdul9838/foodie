import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        {/* Outlet will render the child route components here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
