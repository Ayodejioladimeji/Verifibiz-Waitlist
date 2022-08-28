// import image
import hero from "../assets/about-us.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>What we offer</h3>
        <h1>
          We are bridging the trust gap between customers and service providers.
        </h1>
      </div>

      <div className="hero-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
