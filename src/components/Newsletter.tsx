import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter" id="newsletter">
      <p>Join our waitlist here</p>

      <div className="waitlist-div">
        <input type="text" placeholder="Enter your email" />
        <button>Join waitlist</button>
      </div>
    </div>
  );
};

export default Newsletter;
