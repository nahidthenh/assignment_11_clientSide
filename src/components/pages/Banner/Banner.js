import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12">
              <div className="banner-text">
                <h5>WHAT NEXT COUNTRY?</h5>
                <h1>Venice Romantic Tour</h1>
                <p>
                  For a long time, London was a small city. All its people lived
                  inside the walls that were built by the Romans. This area is
                  still called the City of London. There were many villages
                  around it and gradually they joined.
                </p>
                <button className="btn-style">Book Your Travel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
