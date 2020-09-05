import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Order from "./components/Order";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import M from "materialize-css";

function App() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Home />
      <Order />
      <Location />
      <FAQ />
      <About />
      <Footer />
    </>
  );
}

export default App;
