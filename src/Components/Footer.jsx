import "../index.css";
import { NavLink,Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="main-cont bg-danger p-5">
        <div className="container footer">
          <div className="top row">
            <div className="col-lg-6 col-sm-12">
              <h1>Location</h1>
              <p>
                1525 Awesome Lane, <br />
                Los Angeles, CA
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h1>Subscription</h1>
              <p>+91 2356892356</p>
              <p>+91 2356892356</p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="bottom row">
            <div className="col-lg-6 col-sm-12">
              <h1>Email</h1>
              <p>
                Contact@xgym.com <br />
                www.xgym.com
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h1>Social Media</h1>
              <p style={{ fontSize: "26px" }}>
                <i className="fa-solid fa-thumbs-up text-primary mx-2"></i>
                <i className="fa-brands fa-whatsapp text-success mx-2"></i>
                <i class="fa-brands fa-facebook text-primary mx-2"></i>
                <i class="fa-brands fa-instagram text-danger mx-2"></i>
                <i class="fa-brands fa-twitter text-secondary"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <ul className="items">
                  <li className="list-unstyled">
                    <NavLink to='/' className='text-dark fw-bold text-white mx-1 text-decoration-none'>Home</NavLink>
                  </li>
                  <li className="list-unstyled">
                    <NavLink to='/about' className='text-dark fw-bold text-white mx-1 text-decoration-none'>About</NavLink>
                  </li>
                  <li className="list-unstyled">
                    <NavLink to='/blog' className='text-dark fw-bold text-white mx-1 text-decoration-none'>Blogs</NavLink>
                  </li>
                  <li className="list-unstyled">
                    <NavLink to='/gallery' className='text-dark fw-bold text-white mx-1 text-decoration-none'>Gallery</NavLink>
                  </li>
                   <li className="list-unstyled">
                    <NavLink to='/service' className='text-dark fw-bold text-white mx-1 text-decoration-none'>Service</NavLink>
                  </li>
                  <li className="list-unstyled">
                    <NavLink to='/contact' className='text-dark fw-bold text-white mx-1 text-decoration-none'>Contact</NavLink>
                  </li>

                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
