import React, { useState } from "react";
import { postDataAPI } from "./../utils/fetchData";
import { useToasts } from "react-toast-notifications";

//

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const { addToast } = useToasts();

  // The handlesubmit method
  const handleSubmit = async () => {
    const data = {
      email,
    };

    try {
      await postDataAPI("/newsletter/subscribe", data);
      addToast("Thank you for Subscribing to our Newsletter ", {
        appearance: "success",
      });
      setEmail("");
    } catch (error) {
      addToast("Check your network connection", { appearance: "error" });
    }
  };

  return (
    <div className="newsletter" id="newsletter">
      <p>Join our waitlist here</p>

      <div className="waitlist-div">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Join waitlist</button>
      </div>
    </div>
  );
};

export default Newsletter;
