import { useState } from "react";
// import logo
import logo from "../assets/logo.png";
import logos from "../assets/logo2.png";
import { Link } from "react-scroll";
import Toggle from "./../common/Toggle";

//
// Get theme from localstorage
const getStorageTheme = () => {
  let theme: any = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  return (
    <div className="nav">
      <div className="nav-brand">
        {theme === "light-theme" ? (
          <img src={logo} alt="brand-logo" />
        ) : (
          <img src={logos} alt="brand-logo" />
        )}
      </div>

      <div className="nav-button">
        <Toggle setTheme={setTheme} theme={theme} />

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
