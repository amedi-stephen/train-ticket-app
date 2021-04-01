import React from "react";

function HeroImage() {
  return (
    <div className="hero-image">
      <div className="hero-image-content">
        <div className="hero-position">
          <h1 style={{ textTransform: "uppercase" }}>train ticketing app</h1>
          <h2 style={{ textTransform: "capitalize" }}>
            book tickets from the comfort of your homes
          </h2>
          <form className="form-standard form-book-train">
            <div className="form-group">
              <select>
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
              <select>
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
              <input type="date" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="From" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="From" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
