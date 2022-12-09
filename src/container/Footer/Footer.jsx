import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

import axios from "axios"
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message, number } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setLoading(true);

    const contact = {
      subject: "Contact Us(spotmies.com)",
      suggestionFor: "contactUs",
      suggestionFrom: "others",
      name: formData.username,
      email: formData.email,
      body: formData.message,
      mobile: formData.number,
    };

    axiosPostApiCall(contact);
   
  };


  const axiosPostApiCall = (body) =>{
    setLoading(true);
    axios.  
    post("https://acchedya-server-production.up.railway.app/api/suggestion/new-suggestion", body)
    .then((res) => {
      console.log(res);
      setLoading(false);
      setIsFormSubmitted(true);
    }
    )
    .catch((err) => {
      console.log(err);
      setLoading(false);
      alert("Something went wrong");
    }
    );
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:info@spotmies.com" className="p-text">
            info@spotmies.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8341980196" className="p-text">
            +91 8341980196
          </a>
        </div>
        <div className="app__footer-card">
        <img src={images.location} alt="email" />
          <a className="p-text">
            AU incubation center, Andhra university, Visakhapatnam, Andhra
            Pradesh, 530013.
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          
          <div className="app__flex">
            <input
            required
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
             required
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Contact Number"
              name="number"
              value={number}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
             required
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" >
            {!loading ? "Send Message" : "Sending..."}
          </button>
       
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg",
  true
);
