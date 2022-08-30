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
      if (email === "") {
        addToast("Please enter your email", {
          appearance: "error",
        });
        return;
      }

      await postDataAPI("/newsletter/subscribe", data);
      addToast(
        "You have been added to our waitlist. Thanks for your interest in us.",
        {
          appearance: "success",
        }
      );
      setEmail("");
    } catch (error: any) {
      // console.log(error.response.data.error);
      addToast(error.response.data.error, { appearance: "error" });
      setEmail("");
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
