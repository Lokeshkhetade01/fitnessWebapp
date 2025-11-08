
import Navbar from "./Navbar";
import React from "react";
import { FaDumbbell, FaUsers, FaAppleAlt, FaHeartbeat, FaRunning, FaSpa, FaChild, FaChalkboardTeacher, FaWeight, FaLaptop } from "react-icons/fa";
import "../index.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const services = [
  { icon: <FaChalkboardTeacher />, title: "Personal Training", desc: "One-on-one sessions with certified trainers." },
  { icon: <FaUsers />, title: "Group Classes", desc: "Zumba, Yoga, CrossFit, HIIT, Aerobics and more." },
  { icon: <FaWeight />, title: "Strength Training", desc: "Weightlifting and bodybuilding programs." },
  { icon: <FaRunning />, title: "Cardio & Fitness", desc: "Treadmills, cycling, rowing and more." },
  { icon: <FaAppleAlt />, title: "Nutrition Guidance", desc: "Personalized diet & nutrition plans." },
  { icon: <FaDumbbell />, title: "Body Transformation", desc: "4-12 week fat loss & muscle gain challenges." },
  { icon: <FaHeartbeat />, title: "Functional Training", desc: "TRX, kettlebells, agility & endurance." },
  { icon: <FaSpa />, title: "Wellness & Recovery", desc: "Steam, sauna, physiotherapy & massage." },
  { icon: <FaChild />, title: "Special Programs", desc: "Senior fitness & kids’ fitness plans." },
  { icon: <FaLaptop />, title: "Online Coaching", desc: "Virtual training and fitness guidance." },
];

const Services = () => {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <Navbar/>
    <section className="service-sec">
        <h2 className="mb-4 fw-bold text-white">Our Services</h2>
    </section>
    <section className="services py-5 text-center  text-white mt-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card service-card h-100 text-center p-3">
                <div className="icon mb-3 fs-2">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="join-us d-flex align-items-center text-center text-white pb-5">
      <div className="container">
        <h2 className="fw-bold display-5 text-warning">Join Our Gym Today!</h2>
        <p className="lead my-3">
          Transform your body, mind, and lifestyle with expert trainers, modern
          equipment, and personalized programs. <br />
          Take the first step towards a healthier YOU!
        </p>
        <NavLink to='/contact' className="btn btn-warning btn-lg fw-bold join-btn">
          Join Now
        </NavLink>
      </div>
    </section>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
