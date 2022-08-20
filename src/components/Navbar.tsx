// import logo
import logo from "../assets/logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-brand">
        <img src={logo} alt="brand-logo" />
      </div>

      <div className="nav-button">
        <Link
          to="newsletter"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button>Join waitlist</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
