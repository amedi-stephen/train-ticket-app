import React, { Component } from "react";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import HomeStations from "./HomeStations";
import Steps from "./Steps";
import Banner from "./Banner";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="wrap-home-page">
        <Navbar />
        <HeroImage />
        <HomeStations />
        <Banner />
        <Steps />
        <Footer />
      </div>
    );
  }
}

export default Home;
