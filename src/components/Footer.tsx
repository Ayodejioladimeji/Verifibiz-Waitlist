import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/Verifibiz-africa-103840109119649/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/verifibiz_africa/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/verifibiz_africa/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/verifibiz/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>

      <p>copyright&copy;{new Date().getFullYear()} Verifibiz.africa</p>
    </div>
  );
};

export default Footer;
