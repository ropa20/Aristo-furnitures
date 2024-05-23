import React from "react";
import "./index.css";
import nav from "../../Assests/nav.png";

const Navbar = ({ title, icon, a, handleClose, close }) => {
  return (
    <div className={close === true ? "navbar-open" : "navbar-container"}>
      {icon && close === false && (
        <img className="seg1" src={icon} onClick={() => handleClose()} />
      )}
      {icon && close === true && (
        <div className="mobile-close" onClick={() => handleClose()}>
          X
        </div>
      )}
      <div className="title">{title}</div>
      {a && <div className="A">{a}</div>}
      {a && close === false && <div className="A-desktop">{a}</div>}
    </div>
  );
};
export default Navbar;
