// import image
import hero from "../assets/hero-image.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>Who we are</h3>
        <h1>
          We bridge the trust gap between customers and product/service
          providers.
        </h1>
      </div>

      <div className="hero-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
