import Navbar from "./Navbar";
import Footer from "./Footer";
import '../index.css';
const Blog = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "black" }}>
        <div className="blog-cont">
          <h1
            className="text-white "
            style={{ textDecoration: "underline", fontSize: "35px" }}
          >
            Blog
          </h1>
        </div>


 <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Video */}
        <div className="col-md-6 text-center">
          <video
            src="../src/assets/GYM_Website_Images/gymbg3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-box"
          ></video>
        </div>

        {/* Right Side - Info */}
        <div className="col-md-6 text-white text-center">
          <h2 className="mb-3 text-center">🏋️ Welcome to Our Gym</h2>
          <p>
            At <strong>LiftUp Fitness</strong>, we believe fitness is not just about
            lifting weights — it’s about building strength, discipline, and a
            healthy lifestyle. Our certified trainers, modern equipment, and
            motivational atmosphere will help you achieve your fitness goals.
          </p>
          <button className="btn btn-primary mt-3">Join Now</button>
        </div>
      </div>






        <div className="container mt-5 p-2 text-white">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img
                src="../src/assets/GYM_Website_Images/abs.avif"
                alt=""
                srcset=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2>5 Exercise for a six pack</h2>
              <span className="fw-bold">1. Plank : </span>
              <br />
              Get into a push-up position, then lower your forearms to the
              floor, keeping your body in a straight line from head to heels.
              Engage your core and hold this position.
              <br />
              <span className="fw-bold">2. Bicycle Crunches</span> <br />
              This exercise targets your obliques (side abs) and deep core
              muscles. <br />
              <span className="fw-bold">3. Leg Raises</span>
              <p>
                This exercise is excellent for strengthening your lower
                abdominal muscles
              </p>
              <span className="fw-bold">4.Russian Twist</span> <br />
              <span>
                This exercise is excellent for strengthening your lower
                abdominal muscles
              </span>
              <p className="fw-bold">5. Mountain Climbers</p>
              <p>
                Mountain climbers build core stability and cardiovascular
                endurance while working the abs and obliques.{" "}
              </p>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <h2>5 Exercise for a Strong Arms</h2>
              <span className="fw-bold">1. Bicep Curls : </span>
              <br />
              Hold dumbbells or a barbell and curl the weight up toward your
              shoulders to build strength and definition
              <br />
              <span className="fw-bold">2. Hammer Curls</span> <br />
              This exercise targets your obliques (side abs) and deep core
              muscles. <br />
              <span className="fw-bold">3. Concentraition Culrs</span>
              <p>
                This exercise is Another variation that challenges the muscles
                in a unique wayy
              </p>
              <span className="fw-bold">4.barbell Curls</span> <br />
              <span>
                This exercise is A classic exercise for building bicep strength
              </span>
              <p className="fw-bold">5. Chin Ups</p>
              <p>An effective exercise for overall arm strength. </p>
            </div>

            <div className="col-lg-6 col-sm-12">
              <img
                src="../src/assets/GYM_Website_Images/gymbg.jpeg"
                alt=""
                srcset=""
                width="100%"
              />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <img
                src="../src/assets/GYM_Website_Images/Liftin.jpeg"
                alt=""
                srcset=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2>Physical Benefits of Weight Lifting</h2>
              <span className="fw-bold">
                1. Increased Strength and Muscle Mass:{" "}
              </span>
              <br />
              Lifting weights builds and tones muscle, improving endurance and
              making daily activities easie.
              <br />
              <span className="fw-bold">2. Improved Bone Density:</span> <br />
              The mechanical stress of weight training stimulates bone growth,
              helping to prevent osteoporosis and reduce the risk of fractures{" "}
              <br />
              <span className="fw-bold">3. Boosted Metabolism:</span>
              <p>
                By increasing muscle mass, weight lifting raises your resting
                metabolic rate, helping you burn more calories even when at
                rest, which supports weight management.
              </p>
              <span className="fw-bold">4. Better Heart Health:</span> <br />
              <span>
                Weight training can strengthen the heart muscle, improve blood
                flow, and increase the body's ability to use oxygen, reducing
                the risk of heart disease.
              </span>
              <br />
             
            </div>

             <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <h2>Benefits Abdominal Crunches</h2>
              <div className="mt-4">
                
             1. Ab crunches work the muscles on the front of your abdomen called the rectus abdominus, also known as the six-pack.
              <br />
             2. This exercise targets your obliques (side abs) and deep core
              muscles. <br />
              <p>
                This exercise is Another variation that challenges the muscles
                in a unique wayy
              </p>
              <span>
                4.This exercise is A classic exercise for building bicep strength
              </span>
              <p>5. An effective exercise for overall arm strength. </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <img
                src="../src/assets/GYM_Website_Images/image4.jpg"
                alt=""
                srcset=""
                width="100%"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};
export default Blog;
