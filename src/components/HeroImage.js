import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function HeroImage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="hero-image">
      <div className="hero-image-content">
        <div className="hero-position">
          <h1>train ticketing app</h1>

          <h2>book tickets from the comfort of your homes</h2>

          <form className="form-inline">
            <div className="form-group">
              <label for="locationFrom">from</label>
              {/* FIXME: the value of the state */}
              <select name="locationFrom">
                <option value="">Select...</option>
                <option value="nairobi">Nairobi</option>
                <option value="mombasa">Mombasa Terminus</option>
                <option value="voi">Voi</option>
                <option value="mtito andei">Mtito Andei</option>
                <option value="mariakani">Mariakani</option>
                <option value="miaseny">Miaseny</option>
                <option value="kibwezi">Kibwezi</option>
                <option value="emali">Emali</option>
                <option value="athi river">Athi River</option>
              </select>
            </div>

            <div className="form-group">
              <label for="locationTo">to</label>
              {/*FIXME: the value of the state*/}
              <select name="locationTo" required>
                <option value="">Select...</option>
                <option value="nairobi">Nairobi</option>
                <option value="mombasa">Mombasa</option>
                <option value="voi">Voi</option>
                <option value="mtito andei">Mtito Andei</option>
                <option value="mariakani">Mariakani</option>
                <option value="miaseny">Miaseny</option>
                <option value="kibwezi">Kibwezi</option>
                <option value="emali">Emali</option>
                <option value="athi river">Athi River</option>
              </select>
            </div>

            <div className="form-group">
              <label for="from">departure date</label>
              <DatePicker
                className="input-date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <button className="btn-outline-default">book a train</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
