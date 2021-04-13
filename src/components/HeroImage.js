import React, { useState } from "react";

function HeroImage() {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [date, setDate] = useState(new Date());
  
  return (
    <div className="hero-image">
      <div className="hero-image-content">
        <div className="hero-position">
          <h1>train ticketing app</h1>

          <h2>book tickets from the comfort of your homes</h2>

          <form className="form-inline">
            <div className="form-group">
              <label for="locationFrom">from</label>
              <select name="locationFrom" value={locationFrom} onChange={(e) => setLocationFrom(e.target.value)}>
                <option value="">Select...</option>
                <option value="nairobi">Nairobi Terminus</option>
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
              <select name="locationTo" value={locationTo} onChange={(e) => setLocationTo(e.target.value)}>
                <option value="">Select...</option>
                <option value="nairobi terminus">Nairobi Terminus</option>
                <option value="mombasa terminus">Mombasa Terminus</option>
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
              <label for="startDate">departure date</label>
              {/* <DatePicker
                className="input-date"
                name={startDate}
                selected={startDate}
                onChange={date => setStartDate(date)}
              /> */}
              <input type="date" className="input-date" name="date" value={date} onChange={setDate} />
            </div>
            <button className="btn-outline-default">book a train</button>

            {/* {date} */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
