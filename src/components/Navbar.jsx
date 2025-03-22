import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/about">About</Link>
        <Link className="navbar__link" to="/users">Users</Link>
        <Link className="navbar__link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
