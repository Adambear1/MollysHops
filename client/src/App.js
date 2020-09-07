import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Order from "./components/Order";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  useEffect(() => {
    switch (document.readyState) {
      case "loading":
        document.querySelector(".main").classList.add("hide");
      case "interactive":
        document.querySelector(".main").classList.add("hide");
      case "complete":
        setTimeout(() => {
          document.querySelector(".main").classList.remove("hide");
          document.querySelector(".loader-spin").classList.add("hide");
        }, 1100);

      default:
        setTimeout(() => {
          document.querySelector(".main").classList.remove("hide");
          document.querySelector(".loader-spin").classList.add("hide");
        }, 1100);
    }
  }, [document.readyState]);

  return (
    <>
      <div className="loader-spin"></div>
      <div className="main">
        <Navbar />
        <Jumbotron />
        <Home />
        <Order />
        <Location />
        <FAQ />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
