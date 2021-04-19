import React, { useState } from "react";
import SearchField from "./SearchField";

function HeroImage() {
  
  return (
    <div className="hero-image">
      <div className="hero-image-content">
        <div className="hero-position">
          <h1>train ticketing app</h1>

          <h2>book tickets from the comfort of your homes</h2>

          <SearchField />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
