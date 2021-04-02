import React from "react";

function Steps() {
  return (
    <div className="steps-section container">
      <div className="steps-header">
        <h1>booking steps</h1>
      </div>
      <div className="steps-body">
        <div className="card">
          <div className="card-header">
            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>
            <h5>search for train</h5>
          </div>
          <div className="card-description">
            <p>
              Enter where you are currently and your preffered destination to
              see if there are any available trains going your way.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="search-icon">
              <i className="fa fa-user"></i>
            </div>
            <h5>enter your details</h5>
          </div>
          <div className="card-description">
            <p>
              Fill the form which obtains details that will make your travel better.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="search-icon">
              <i className="fa fa-credit-card"></i>
            </div>
            <h5>payment details</h5>
          </div>
          <div className="card-description">
            <p>
              It is now time to pay for your seat. The amount will be calcualted and you can either pay now or later.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Steps;
