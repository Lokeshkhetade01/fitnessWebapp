import { NavLink, Link } from "react-router-dom";
import '../index.css';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    {/* Brand on the left */}
    <Link className="navbar-brand text-white" to="/">
      <span
        style={{
          fontFamily: "monospace",
          borderTop: "2px solid orange",
          fontSize: "22px",
          whiteSpace: "nowrap"
        }}
      >
        LiftUp
      </span>
      <span
        style={{
          color: "orange",
          fontFamily: "sans-serif",
          borderBottom: "2px solid white"
        }}
      >
        Fitness
      </span>
    </Link>

    {/* Toggler for mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav ms-auto text-center">
        <NavLink className="nav-item nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item nav-link" to="/blog">
          Blogs
        </NavLink>
        <NavLink className="nav-item nav-link" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="nav-item nav-link" to="/service">
          Service
        </NavLink>
        <NavLink className="nav-item nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
