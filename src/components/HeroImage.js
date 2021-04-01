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

          <h2>
            book tickets from the comfort of your homes
          </h2>

          <form className="form-standard form-search-train">
            <div className="form-group">
              <label for = "from">from</label>
              <select required>
                <option value="hidden">Select...</option>
                <option>Nairobi Terminus</option>
                <option>Mombasa Terminus</option>
                <option>Voi</option>
                <option>Mtito Andei</option>
                <option>Mariakani</option>
                <option>Miaseny</option>
                <option>Kibwezi</option>
                <option>Emali</option>
                <option>Athi River</option>
              </select>
            </div>

            <div className="form-group">
            <label for = "from">to</label>
              <select required>
                <option>Select...</option>
                <option>Nairobi Terminus</option>
                <option>Mombasa Terminus</option>
                <option>Voi</option>
                <option>Mtito Andei</option>
                <option>Mariakani</option>
                <option>Miaseny</option>
                <option>Kibwezi</option>
                <option>Emali</option>
                <option>Athi River</option>
              </select>
            </div>

            <div className="form-group">
              <label for = "from">departure date</label>
              <DatePicker className="input-date" selected={startDate} onChange={date =>setStartDate(date)} />
            </div>

            <button className="btn-outline-default">book a train</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
