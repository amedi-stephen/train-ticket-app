import React from "react";
// import { Link } from "react-router-dom";

function HomeStations() {
  return (
    <div className="home-station-section container">
      <div className="station-section-header">
        <h1>Featured Stations</h1>
      </div>

      <div class="cards-row">
        <div className="card">
          <div className="station-image">
            <img src="/Images/54_n.jpg" alt="city" />
          </div>
          <div className="station-description">
            <h5>Nairobi</h5>
            <p>
              Located at Syokimau, Nairobi. Found just south of the capital
              city. Built as Two trains with a bridge on top.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="station-image">
            <img src="../Images/85_n.jpg" alt="city"/>
          </div>
          <div className="station-description">
            <h5>Mombasa</h5>
            <p>
              Located in Miritini, Mombasa. Built as concentric circles and a
              central tower, representing a ripple in the ocean.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="station-image">
            <img src="../Images/54_n.jpg" alt="city" />
          </div>
          <div className="station-description">
            <h5>Voi</h5>
            <p>
              Voi is the largest town in Taita-Taveta County in southern Kenya,
              in the former Coast Province.
            </p>
          </div>
        </div>
      </div>
      {/* TODO: 
      <Link to = "/stations">view more</Link> */}
    </div>
  );
}

export default HomeStations;
