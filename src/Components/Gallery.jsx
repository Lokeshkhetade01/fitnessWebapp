import "../index.css";
import Navbar from "./Navbar";
import trainer1 from "../assets/GYM_Website_Images/1.jpg";
import trainer2 from "../assets/GYM_Website_Images/2.jpg";
import trainer3 from "../assets/GYM_Website_Images/3.jpg";
import trainer4 from "../assets/GYM_Website_Images/4.jpg";
import { Carousel } from "react-bootstrap";
import GymArea from "./GymArea";
import Footer from './Footer';
const Gallery = () => {
  const images = [
    "../src/assets/Transformation/t1.png",
    "../src/assets/Transformation/t2.png",
    "../src/assets/Transformation/t3.png",
    "../src/assets/Transformation/t4.png",
    "../src/assets/Transformation/t5.png",
    "../src/assets/Transformation/t6.png",
    "../src/assets/Transformation/t7.png",
    "../src/assets/Transformation/t8.png",
  ];
  return (
    <>
    <div className="" style={{backgroundColor:"black"}}>
      <Navbar />

      <div className="gallery-cont">
        <h1 className="text-white">Gym Gallery</h1>
      </div>
    <GymArea/>

      <h1
        className="text-center text-warning pt-5 pb-5"
        style={{ backgroundColor: "black" }}
      >
        Gym Area
      </h1>
      <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row g-3">
            {/* Row 1 - 2 images (smaller height) */}
            <div className="col-md-6">
              <img
                src="../src/assets/GYM_Website_Images/gallery2.jpg"
                alt="Gym 1"
                className="img-fluid rounded shadow gallery-img small-row"
              />
            </div>
            <div className="col-md-6">
              <img
                src="../src/assets/GYM_Website_Images/gymarea2.jpeg"
                alt="Gym 2"
                className="img-fluid rounded shadow gallery-img small-row"
              />
            </div>

            {/* Row 2 - 3 images (normal height) */}
            <div className="col-md-4">
              <img
                src="../src/assets/GYM_Website_Images/gymarea3.jpeg"
                alt="Gym 3"
                className="img-fluid rounded shadow gallery-img normal-row"
              />
            </div>
            <div className="col-md-4">
              <img
                src="../src/assets/GYM_Website_Images/gymarea4.jpeg"
                alt="Gym 4"
                className="img-fluid rounded shadow gallery-img normal-row"
              />
            </div>
            <div className="col-md-4">
              <img
                src="../src/assets/GYM_Website_Images/gymarea5.avif"
                alt="Gym 5"
                className="img-fluid rounded shadow gallery-img normal-row"
              />
            </div>

            {/* Row 3 - 2 images (smaller height) */}
            <div className="col-md-6">
              <img
                src="../src/assets/GYM_Website_Images/gymarea7.avif"
                alt="Gym 6"
                className="img-fluid rounded shadow gallery-img small-row"
              />
            </div>
            <div className="col-md-6">
              <img
                src="../src/assets/GYM_Website_Images/gymarea6.webp"
                alt="Gym 7"
                className="img-fluid rounded shadow gallery-img small-row"
              />
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-bold text-warning">
            Our Trainers
          </h2>
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
              <p className="" style={{ color: "white" }}>
                Strength & Conditioning Coach
              </p>
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
              <p style={{ color: "white" }}>Yoga & Flex ibility Expert</p>
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
              <p style={{ color: "white" }}>Weightlifting Specialist</p>
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
              <p style={{ color: "white" }}>Cardio & Endurance Coach</p>
            </div>
          </div>

          {/* Transformation start here */}
        <div className="container my-5">
          <h2 className="text-center mb-4 text-warning">
            Before & After Transformations
          </h2>
          <Carousel
            indicators={true}
            controls={true}
            interval={3000}
            className="small-carousel"
          >
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block mx-auto rounded shadow"
                  src={img}
                  alt={`Transformation ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        </div>

      </div>
      <Footer/>
    </div>

    </>
  );
};
export default Gallery;
