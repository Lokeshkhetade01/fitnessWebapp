import { useState } from "react";
import Navbar from "./Navbar";
import "../index.css";

const Contact = () => {
  // ✅ State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");

    // ✅ Clear all fields after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-black min-vh-100">
        <Navbar />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="card bg-transparent border border-light shadow-lg p-4 rounded-3 text-white mt-5">
                <h2 className="text-center mb-4 fw-bold text-light">
                  Contact Us
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border border-light"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control bg-transparent text-white border border-light"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control bg-transparent text-white border border-light"
                      id="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message
                    </label>
                    <textarea
                      className="form-control bg-transparent text-white border border-light"
                      id="message"
                      rows="4"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-warning fw-bold">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
