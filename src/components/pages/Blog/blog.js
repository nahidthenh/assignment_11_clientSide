import React from "react";

import service1 from "../../../images/travel-world.jpg";
import service2 from "../../../images/slider2_2.jpg";
import service3 from "../../../images/tour1.jpg";
import "./Blog.css";
const blog = () => {
  return (
    <div>
      <div className="pb-5">
        <div className="banner-content">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="container clients">
        <div className="row">
          <div className="col-md-12 my-5">
            <h2>Top Travelling Destinations</h2>
            <p>Exquisite tours to the most popular cities on the planet.</p>
          </div>
        </div>
        <div className="row py-2 mb-5">
          <div className="col-md-4">
            <div className="travel-item shadow ">
              <img src={service1} alt="" className="img-fluid pb-4" />
              <h5>Online Booking System</h5>
              <p>Your booking system! We offer a booking, scheduling help.</p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="travel-item shadow ">
              <img src={service2} alt="" className="img-fluid pb-4" />
              <h5>Get Travel Free</h5>
              <p>
                Travel Some time is free to cover medical expenses.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="travel-item shadow ">
              <img src={service3} alt="" className="img-fluid pb-4" />
              <h5>Best Bangladeshi Service</h5>
              <p>
                We all want it. If we run a business, we all want to give the
                impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
