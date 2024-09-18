import React from "react";
import { StyledWorkingRemotely } from "./style";
import Header from "../Header";

const WorkingRemotely = () => {
  return (
    <StyledWorkingRemotely>
      {/* <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div> */}
      <form action="" className="form">
        <h1 className="title">Key Verification</h1>
        <label className="form-label">
          <input
            type="text"
            placeholder="Enter Key Here"
            className="form-input"
          />
        </label>
        <div className="form-message"></div>
        <button type="submit" className="form-button">
          Verify
        </button>
      </form>
    </StyledWorkingRemotely>
  );
};

export default WorkingRemotely;
