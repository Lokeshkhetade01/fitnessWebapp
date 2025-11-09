import Navbar from "./Navbar";
import '../index.css';
const Contact = () => {
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
                <form>
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
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-warning fw-bold" onClick={()=>{
                      return alert("Register Successfull!")
                    }}>
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

