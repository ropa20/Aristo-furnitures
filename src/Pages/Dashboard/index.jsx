import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import video from "../../Assests/48sloanesquare.mp4";
import Section from "../../Components/Section";
import img from "../../Assests/img1.jpg";
import cover from "../../Assests/cover.jpeg";
import nav from "../../Assests/nav.png";
import "./index.css";
import categories from "../../Assests/Dummy";
import Footer from "../../Components/Footer";
import SideNav from "../../Components/SideNav";
const features = [
  {
    id: 1,
    point: "lutron lighting and window dressing automation",
  },
  {
    id: 2,
    point: "crestron control through ipad for audio visual system",
  },
  {
    id: 3,
    point:
      "climate control air conditioning and continuous fresh air ventilation throughout",
  },
  {
    id: 4,
    point: "nvisible fire detection system",
  },
  {
    id: 5,
    point: "quadruple low iron glass pane, triple sealed, ultra silent windows",
  },
  {
    id: 6,
    point: "sonos and crestron music system",
  },
  {
    id: 7,
    point: "concealed in-wall sub-woofer",
  },
  {
    id: 8,
    point: "concealed safe",
  },
  {
    id: 9,
    point: "high flow rate water distribution",
  },
  {
    id: 10,
    point: "central heating nest controlled remotely through iphone",
  },
];
const Dashboard = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    console.log("in");
    setClose(!close);
  };
  const handleOpen = () => {
    setClose(!close);
  };
  return (
    <div className="main-container">
      {close === true && <SideNav handleClose={handleClose} close={close} />}
      <Navbar
        title={"48 SLOANE SQUARE"}
        icon={nav}
        a={"A"}
        handleClose={handleClose}
        close={close}
      />
      <video
        className="bg-vid"
        src={video}
        controls="controls"
        autoplay="true"
      />
      <img className="cover" src={cover} />
      <Section
        img={img}
        h1="AN INTRODUCTION"
        h2="48 SLOANE SQUARE"
        para="This Sloane Square property, built in 1904, boasts one of London’s best addresses. Today home to many of the world’s best fashion houses, this west facing apartment lies at the heart of the unique estate of the Cadogan family and directly overlooks the square bearing the family name of Sir Hans Sloane, notable for bequeathing his collection of natural history and curiosities to the nation paving the way for the foundation of the British Museum"
        ps="Download floorplan"
        bgColor="black"
        text="white"
        align={"left"}
      />
      {categories?.lobby?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "ENTRANCE LOBBY" : ""}
            h2={item.title}
            para={item.para}
            bgColor="white"
            text="black"
            align={item.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
      {categories?.drawing_room?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "DRAWING ROOMS" : ""}
            h2={item.title}
            para={item.para}
            bgColor="black"
            text="white"
            align={item.id % 2 === 0 ? "right" : "left"}
          />
        );
      })}
      {categories?.dining_room?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "DINING ROOMS" : ""}
            h2={item.title}
            para={item.para}
            bgColor="white"
            text="black"
            align={item.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
      {categories?.bedroom?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "BEDROOMS" : ""}
            h2={item.title}
            para={item.para}
            bgColor="black"
            text="white"
            align={item.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
      {categories?.bathroom?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "BATHROOMS" : ""}
            h2={item.title}
            para={item.para}
            bgColor="white"
            text="black"
            align={item.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
      {categories?.kitchen?.map((item, index) => {
        return (
          <Section
            img={item.url}
            h1={item.id === 1 ? "KITCHEN" : ""}
            h2={item.title}
            para={item.para}
            bgColor="white"
            text="black"
            align={item.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
      <Section
        img={img}
        h1="PROPERTY SUMMARY"
        h2="LATERAL ACOMMODATION"
        para="A three bedroom single level apartment that occupies the second floor of a period building on Sloane Square, with seven windows overlooking the square. The property features a lift, high ceilings, two balconies and boasts exceptional west facing views."
        bgColor="black"
        text="white"
        align="left"
        ps="Download floorplan"
      />
      <Section
        img={img}
        h2="PROPERTY FEATURES"
        para={
          <ul className="list">
            {features?.map((item) => {
              return <li className="li">{item.point}</li>;
            })}
          </ul>
        }
        bgColor="white"
        text="black"
        align="right"
      />
      <Footer />
    </div>
  );
};

export default Dashboard;
