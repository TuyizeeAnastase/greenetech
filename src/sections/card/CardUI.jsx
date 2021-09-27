import React from "react";
import service from "../../images/service.jpg";
import "./card-style.css";
import green from "../../images/Capture.JPG";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={green} alt="" className="card-image-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title" style={{ color: "rgb(12, 51, 30)" }}>
          Green vehicle system installation
        </h4>
        <p className="card-text text-secondary">
          Taking your part contributing to vehicle emission reduction, we offer
          you a green vehicle system and get installed with comfort in your
          vehicle with trusted experts in the field
        </p>
        <a href="/#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};
export default Card;
