// import images
import hero2 from "../assets/hero2.svg";

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero2-left">
        <img src={hero2} alt="" />
      </div>

      <div className="hero2-right">
        <h3>ABOUT US</h3>
        <p>
          We are Verifibiz! An escrow service platform to mitigate the social
          commerce scam popularly known as “What I ordered VS what I got”, which
          has been a source of frustration in the social and e-commerce space.
          We bridge the trust gap between customers and product/service
          providers.
        </p>
      </div>
    </div>
  );
};

export default Hero2;
