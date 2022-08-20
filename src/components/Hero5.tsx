// import images
import hero5 from "../assets/hero5.svg";

const Hero5 = () => {
  return (
    <div className="hero3">
      <div className="hero3-left">
        <h3>THERE IS A LOT MORE</h3>
        <p>
          There is a lot more we would like to share with you but where is the
          fun in knowing everything now? (winks). If we have piqued your
          interest, let us know by getting on the waitlist. We would let you
          know as soon as we launch.
        </p>
      </div>

      <div className="hero3-right">
        <img src={hero5} alt="" />
      </div>
    </div>
  );
};

export default Hero5;
