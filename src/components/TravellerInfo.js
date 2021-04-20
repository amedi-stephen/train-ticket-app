import React from "react";
import Nav from "./Nav";

const TravellerInfo = () => {
  return (
    <div>
      <Nav />

      <div className="container traveller-body">
        <div className="header-center">
          <h1>traveller details</h1>
        </div>

        <form className="traveller-details">
          <h4>How many people</h4>
          <div className="form-group">
            <label for="adult-count">Adults</label>
            <input type="text" placeholder="How many adults" />
          </div>

          <div className="form-group">
            <label for="child-count">Children</label>
            <input type="text" placeholder="How many children(12 - 17 years)" />
          </div>

          <div className="form-group">
            <label for="infant-count">Children</label>
            <input type="text" placeholder="How many children (3 - 7 years)" />
          </div>

          <div className="form-group">
            <select>
              <option value="first class">First Class</option>
              <option value="economy">Economy</option>
            </select>
          </div>

          <div className="calculate-total">
            <h2>Total fare: 4500</h2>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TravellerInfo;
