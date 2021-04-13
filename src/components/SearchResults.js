import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Nav from "./Nav";
import Footer from "./Footer";

import "react-datepicker/dist/react-datepicker.css";

function SearchResults() {
  const [startDate, setStartDate] = useState(new Date());
  // TODO: lets consider that this component also stores state
  return (
    <div>
      <Nav />

      <div className="container search-wrapper">
        {/* HEADER */}
        <div className="header-center">
          <h1>search results</h1>
        </div>
        {/* END OF HEADER */}

        {/* BODY */}
        <div className="train-body">
          {/* USER-SEARCH-INFO */}
          <div className="user-search-info">
            <h4>Your search:</h4>
            <span>From: Voi</span>
            <span>To : Mtito Andei</span>
            <span>Departure date: Wed, Apr 21 2021</span>
          </div>
          <hr />
          {/*  END OF USER-SEARCH-INFO */}

          {/* MODIFY SEARCH */}
          <section className="modify-search">
            {/* MODIFY FORM */}
            <div className="form-section">
              {/* MODIFY SEARCH HEADER */}
              <div className="heading-row">
                <h3>Search again</h3>
                <button type="button" className="btn-default-md btn-toggle">
                  <span className="plus-icon">
                    <i className="far fa-plus"></i>
                  </span>
                  <span className="minus-icon">
                    <i className="far fa-minus"></i>
                  </span>
                </button>
              </div>
              {/* END MODIFY SEARCH HEADER */}
              <form className="form-inline form-bordered">
                {/* FORM GROUP */}
                <div className="form-group">
                  <label for="leaving-from">Leaving from</label>
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
                {/* END OF FORM GROUP */}

                {/* FORM GROUP */}
                <div className="form-group">
                  <label for="going-to">Going to</label>
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
                {/* END OF FORM GROUP */}

                {/* FORM GROUP */}
                <div className="form-group">
                  <label for="from">departure date</label>
                  <DatePicker
                    className="input-date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                {/* END OF FORM GROUP */}
              </form>
              {/* END OF MODIFY FORM */}
            </div>
          </section>
          {/* END OF MODIFY SEARCH */}

          {/* TODO: WARNING MESSAGE - IF TRAIN NOT FOUND */}
          <div className="alert-warning">
            <div className="warning-header">
              <h3>Fully booked - search differently</h3>
            </div>
            <div className="warning-body">
              <p>
                Train seats fully booked for Voi to Mtito Andei on 04/21/2021.
                Please search for another date.
              </p>
            </div>
          </div>
          {/* END OF WARNING MESSAGE - IF TRAIN NOT FOUND*/}

          {/* TRAIN INFO - IF TRAIN FOUND */}
          <div className="train-info">
            {/* HEADING THREE */}
            <div className="header-center">
              <h3 style={{ textTransform: "capitalize" }}>
                Train E2 - Nairobi Terminus to Mombasa
              </h3>
            </div>
            {/* END OF HEADING THREE */}
            <div className="train-info-body">
              {/* FIRST CLASS INFO */}
              <div className="first-class-info">
                <p>First class - 107 seats open </p>
                <p>Adults: kshs. 3000 </p>
                <p>Children (btwn 3 - 11yrs):kshs. 1500 </p>
                <p>Children (below 3 yrs): Free</p>
              </div>
              {/* END OF FIRST CLASS INFO */}
              {/* ECONOMY CLASS INFO */}
              <div className="first-class-info">
                <p>Economy - 653 seats open </p>
                <p>Adults: kshs. 1000 </p>
                <p>Children (btwn 3 - 11yrs):kshs. 500 </p>
                <p>Children (below 3 yrs): Free</p>
              </div>
              {/* END OF ECONOMY CLASS INFO */}
            </div>
            <small style={{ textAlign: "center", display: "block" }}>
              <span style={{ marginRight: "5%" }}>Departure: 02:35</span>
              <span>Arrival: 07:18</span>
            </small>
            <button className="btn-default-lg btn-center">Choose Train</button>
          </div>
          {/* END OF TRAIN INFO - IF TRAIN FOUND */}
        </div>
        {/* END OF BODY */}
      </div>

      <Footer />
    </div>
  );
}

export default SearchResults;
