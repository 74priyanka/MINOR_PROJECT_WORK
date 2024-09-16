import React from "react";
import { StyledEmployee } from "./style";
import Card from "../Card";
import DynamicHeader from "../DynamicHeader";

import { useNavigate } from "react-router";

const Employee = () => {
  const navigate = useNavigate();

  const handleOfficeWork = () => {
    navigate("/Attendance");
  };

  const handleRemoteWork = () => {
    navigate("/Attendance");
  };
  return (
    <StyledEmployee className="employee">
      <DynamicHeader headingName="EMPLOYEE" />

      <div className="card-container">
        <Card name="Working from Office" onClick={handleOfficeWork} />
        <Card name="Working Remotely" onClick={handleRemoteWork} />
      </div>
    </StyledEmployee>
  );
};

export default Employee;
