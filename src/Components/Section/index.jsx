import React from "react";
import "./index.css";
const Section = ({ img, h1, h2, para, ps, bgColor, text, align }) => {
  return (
    <>
      {align === "left" && (
        <div
          className="section-container-left"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <img className="img1" src={img} />
          <div className="seg2">
            <div className="heading1" style={{ color: `${text}` }}>
              {h1}
            </div>
            <div className="heading2">{h2}</div>
            <div className="paragraph">{para}</div>
            <div className="ps">{ps}</div>
          </div>
        </div>
      )}
      {align === "right" && (
        <div
          className="section-container-right"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="seg2">
            <div className="heading1" style={{ color: `${text}` }}>
              {h1}
            </div>
            <div className="heading2">{h2}</div>
            <div className="paragraph">{para}</div>
            <div className="ps">{ps}</div>
          </div>
          <img className="img1" src={img} />
        </div>
      )}
      <div className="mobile-container">
        <div className="seg2" style={{ backgroundColor: `${bgColor}` }}>
          <div className="heading1" style={{ color: `${text}` }}>
            {h1}
          </div>
          <div className="heading2">{h2}</div>
          <div className="paragraph">{para}</div>
          <div className="ps">{ps}</div>
        </div>
        <img className="img1" src={img} />
      </div>
    </>
  );
};

export default Section;
