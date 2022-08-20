import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p>Do you want to stay updated about our product and services ? </p>
      <p>Join our waitlist today</p>

      <div className="waitlist-div">
        <input type="text" placeholder="Enter your email" />
        <button>Join Waitlist</button>
      </div>
    </div>
  );
};

export default Newsletter;
