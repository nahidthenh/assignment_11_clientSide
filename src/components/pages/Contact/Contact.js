import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className=" pb-5">
        <div className="banner-content">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="offset-md-1 col-md-10">
         
          <form className="row g-3 mb-5">
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Subject</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Subject"
              />
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea" style={{ height: " 250px" }}>
                Your Massage...
              </label>
            </div>

            <div className="col-md-5">
              <button type="submit" className="col-md-5 btn-style" style={{ textAlign: "center" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
