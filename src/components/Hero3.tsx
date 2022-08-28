// import images
import hero3 from "../assets/buyers.svg";

const Hero3 = () => {
  return (
    <div className="hero3">
      <div className="hero3-left">
        <h3>FOR SERVICE RECIPIENTS</h3>
        <p>
          You can buy anything, anywhere from an online vendor using our
          platform; all you need is just the vendor's email address and your
          payment will be protected with our escrow service until your item is
          delivered and confirmed by you. Interesting right?😊
        </p>
      </div>

      <div className="hero3-right">
        <img src={hero3} alt="" />
      </div>
    </div>
  );
};

export default Hero3;
