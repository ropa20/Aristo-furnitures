import React from "react";
import "./index.css";
import instalogo from "../../Assests/insta-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-seg1">
          <div className="seg1-header">GENERAL ENQUIRIES</div>
          <div className="seg1-para">
            To enquire further about 48 Sloane Square, or additional property
            services, please use the form below. Please include your telephone
            number if you would prefer to be contacted this way. We aim to
            respond to all enquires within 48 hours.
          </div>
          <div className="form">
            <input className="name" placeholder="name" />
            <input className="email" placeholder="email address" />
            <textarea rows={2} className="message" placeholder="your message" />
          </div>
          <button className="send-msg">Send Message</button>
        </div>
        <div className="footer-seg2">
          <div className="seg1-header">CONTACT ARISTO</div>
          <div className="address">
            Aristo
            <br />8 Duke Street
            <br />
            London, W1U 3EW
          </div>
          <div className="tel">Telephone: +44 (0)20 7935 5006</div>
          <div className="facs">Facsimile: +44 (0)20 7935 5006</div>
          <div className="mail">sales@aristolondon</div>
          <div className="insta">
            <div className="insta-logo"></div>
            <div className="insta-text">INSTAGRAM</div>
          </div>
        </div>
      </div>
      <div className="mobile-footer-container">
        <div className="footer-seg2">
          <div className="seg1-header">CONTACT ARISTO</div>
          <div className="address">
            Aristo
            <br />8 Duke Street
            <br />
            London, W1U 3EW
          </div>
          <div className="tel">Telephone: +44 (0)20 7935 5006</div>
          <div className="facs">Facsimile: +44 (0)20 7935 5006</div>
          <div className="mail">sales@aristolondon</div>
          <div className="insta">
            <div className="insta-logo"></div>
            <div className="insta-text">
              <img
                src="https://www.flaticon.com/free-icons/instagram"
                title="instagram icons"
              />
              INSTAGRAM
            </div>
          </div>
        </div>
        <div className="footer-seg1">
          <div className="seg1-header">GENERAL ENQUIRIES</div>
          <div className="seg1-para">
            To enquire further about 48 Sloane Square, or additional property
            services, please use the form below. Please include your telephone
            number if you would prefer to be contacted this way. We aim to
            respond to all enquires within 48 hours.
          </div>
          <div className="form">
            <input className="name" placeholder="name" />
            <input className="email" placeholder="email address" />
            <textarea rows={2} className="message" placeholder="your message" />
          </div>
          <button className="send-msg">Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
