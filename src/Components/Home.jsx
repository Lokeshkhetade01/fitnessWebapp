import Navbar from "./Navbar";
import "../index.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/GYM_Website_Images/heroImage.png";
import About from './About.jsx';
import Blog from './Blog';
const Home = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid home-sec d-flex align-items-center mt-5 pb-4">
        <div className="row w-100">
          {/* Left Side - Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-white p-5">
            <h1 className="display-3 fw-bold">
              Build your <br /> Dream Physique
            </h1>
            <h2 className="fw-semibold mb-4">Physical Fitness</h2>
            <div>
              <p className="fs-5">A gym is not just a place to train — it’s where strength is built,  
      confidence is earned, and transformations begin.  
      Every drop of sweat brings you one step closer  
      to the best version of yourself.</p>
            <button onClick={onNavigate} className="btn btn-warning">
              Register
            </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        </div>
      </div>
<About/>
    </>
  );
};

export default Home;
