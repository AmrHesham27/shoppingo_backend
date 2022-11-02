import React from "react";

function ContactUs() {
  return (
    <div className="section section-padding">
      <div className="separator my-3">
        <div className="line"></div>
        <h3 className="mb-0 h3 fw-bold">Contact Us</h3>
        <div className="line"></div>
      </div>
      <div className="row g-4">
        <div className="col-xl-8">
          <div className="p-4 border">
            <form>
              <div className="form-body">
                <h4 className="mb-0 fw-bold">Drop Us a Line</h4>
                <div className="my-3 border-bottom"></div>
                <div className="mb-3">
                  <label className="form-label">Enter Your Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Email</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control rounded-0"
                    rows="4"
                    cols="4"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button className="btn btn-dark btn-ecomm">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="p-3 border">
            <div className="address mb-3">
              <h5 className="mb-0 fw-bold">Address</h5>
              <p className="mb-0 font-12">123 Street Name, City, Australia</p>
            </div>
            <hr />
            <div className="phone mb-3">
              <h5 className="mb-0 fw-bold">Phone</h5>
              <p className="mb-0 font-13">Toll Free (123) 472-796</p>
              <p className="mb-0 font-13">Mobile : +91-9910XXXX</p>
            </div>
            <hr />
            <div className="email mb-3">
              <h5 className="mb-0 fw-bold">Email</h5>
              <p className="mb-0 font-13">mail@example.com</p>
            </div>
            <hr />
            <div className="working-days mb-0">
              <h5 className="mb-0 fw-bold">Working Days</h5>
              <p className="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
