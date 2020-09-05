import React from "react";
import Order from "../../components/Order";
import Location from "../../components/Location";
import FAQ from "../../components/FAQ";
import About from "../../components/About";
import "./styles.css";
import MainBody from "../../components/MainBody";
import MobileNav from "../../components/MobileNav";

function Home() {
  return (
    <div className="container">
      <MobileNav />
      <MainBody />
    </div>
  );
}

export default Home;
