// import logo
import logo from "../assets/logo2.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-brand">
        <img src={logo} alt="brand-logo" />
      </div>

      <div className="nav-button">
        <button>Help Center</button>
      </div>
    </div>
  );
};

export default Navbar;
