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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    switch (document.readyState) {
      case "loading":
        console.log("loading");
        setLoading(true);
      case "interactive":
        console.log("interactive");
        setLoading(true);
      case "complete":
        setTimeout(() => {
          console.log("complete");
          setLoading(false);
        }, 900);

      default:
        setTimeout(() => {
          setLoading(false);
        }, 1400);
    }
  }, [document.readyState]);

  return (
    // loading ? (
    //   <div className="loader-spin"></div>
    // ) :
    // (
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
