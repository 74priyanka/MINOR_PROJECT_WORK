import React from "react";
import { StyledDynamicHeader } from "./style";
import { Link } from "react-router-dom";
import face_recognition from "../../assets/face_recognition.png";

const DynamicHeader = ({ headingName }) => {
  return (
    <StyledDynamicHeader>
      <div className="logo-container">
        <img src={face_recognition} alt="" className="logo" />
      </div>
      <div className="heading">{headingName}</div>
    </StyledDynamicHeader>
  );
};

export default DynamicHeader;
