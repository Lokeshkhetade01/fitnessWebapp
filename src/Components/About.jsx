import Navbar from "./Navbar";
import "../index.css";
import trainer1 from "../assets/GYM_Website_Images/1.jpg";
import trainer2 from "../assets/GYM_Website_Images/2.jpg";
import trainer3 from "../assets/GYM_Website_Images/3.jpg";
import trainer4 from "../assets/GYM_Website_Images/4.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <div className="about">
        <h1 className="text-white fw-bold display-4">About Us</h1>
      </div>

      {/* About Info */}
      <div className="container py-5 text-white">
        <h2 className="text-center mb-4" style={{ fontFamily: "sans-serif" }}>
          We care about your health
        </h2>

        <p className="fs-5 mb-4">
          At LiftUp Fitness, we believe that everyone deserves access to a
          healthier lifestyle. Our mission is to empower people of all ages and
          abilities to achieve their fitness goals and feel their absolute best.
          Since opening our doors, we have committed ourselves to creating a
          safe, welcoming, and motivating environment for every member who joins
          our community. Our experienced trainers bring passion, expertise, and
          personal attention to every session, ensuring that each individual
          receives the guidance and encouragement needed to succeed.
        </p>

        <p className="fs-5">
          At the heart of our gym is a supportive community that celebrates
          progress, no matter how big or small. We value hard work, positive
          contribution, and dedication — not just to workouts, but to building a
          vibrant environment where you can grow stronger, physically and
          mentally, every day.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="container py-5">
        <div className="row about-sec align-items-center">
          <div className="left col-lg-6 col-sm-12 mb-4 mb-lg-0"></div>
          <div className="right col-lg-6 col-sm-12 px-4 text-white">
            <h2 className="fw-bold mb-3">Why Choose Us?</h2>
            <p className="fs-5">
              We provide state-of-the-art facilities, personalized training
              programs, and a supportive environment that motivates you to push
              beyond limits. Whether your goal is strength, endurance, weight
              loss, or overall wellness, our expert trainers are here to guide
              you every step of the way.
            </p>
            <p className="fs-5">we have committed ourselves to creating a
          safe, welcoming, and motivating environment for every member who joins
          our community</p>
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <div className="container py-5" >
        <h2 className="text-center mb-5 fw-bold text-warning">Our Trainers</h2>
        <div className="row text-center">
          {/* Trainer 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src={trainer1}
              alt="Trainer 1"
              className="img-fluid rounded-circle mb-3 shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold text-white">John Smith</h5>
            <p className="" style={{color:"white"}}>Strength & Conditioning Coach</p>
          </div>

          {/* Trainer 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src={trainer2}
              alt="Trainer 2"
              className="img-fluid rounded-circle mb-3 shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold text-white">Sarah Johnson</h5>
            <p style={{color:"white"}}>Yoga & Flex ibility Expert</p>
          </div>

          {/* Trainer 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src={trainer3}
              alt="Trainer 3"
              className="img-fluid rounded-circle mb-3 shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold text-white">Michael Brown</h5>
            <p style={{color:"white"}}>Weightlifting Specialist</p>
          </div>

          {/* Trainer 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src={trainer4}
              alt="Trainer 4"
              className="img-fluid rounded-circle mb-3 shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold text-white">Emily Davis</h5>
            <p style={{color:"white"}}>Cardio & Endurance Coach</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
