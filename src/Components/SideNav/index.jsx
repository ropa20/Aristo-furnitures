import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import "./index.css";
const navOptions = [
  "AN INTRODUCTION",
  "ENTRANCE",
  "DRAWING ROOM",
  "DINING ROOM",
  "THE BEDROOMS",
  "BATHROOMS",
  "KITCHEN",
  "PROPERTY SUMMARY",
  "FEATURES",
  "FLOORPLAN",
  "CONTACT",
];
const SideNav = ({ handleClose }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]);
  return (
    <div
      className="side-container"
      ref={navRef}
      onClick={(e) => {
        // do not close modal if anything inside modal content is clicked
        e.stopPropagation();
      }}
    >
      <button className="close-desktop" onClick={() => handleClose()}>
        X
      </button>
      <ul className="list">
        {navOptions?.map((item) => {
          return <li className="list-ele">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideNav;
