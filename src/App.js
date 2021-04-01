import React from "react";
import DatePicker from "react-datepicker";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import "./Sass/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
    </div>
  );
}

export default App;
