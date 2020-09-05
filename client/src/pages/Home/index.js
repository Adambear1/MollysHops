import React from "react";
import Order from "../../components/Order";
import Location from "../../components/Location";
import FAQ from "../../components/FAQ";
import About from "../../components/About";

function Home() {
  return (
    <div className="container">
      <Order />
      <Location />
      <FAQ />
      <About />
    </div>
  );
}

export default Home;
