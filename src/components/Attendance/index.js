import React from "react";
import { StyledAttendance } from "./style";
import Card from "../Card";
import DynamicHeader from "../DynamicHeader";

import { useNavigate } from "react-router";

const Attendance = () => {
  const navigate = useNavigate();

  const handleMarkAttendance = () => {
    navigate("/Attendance");
  };

  const handleViewAttendance = () => {
    navigate("/Attendance");
  };
  return (
    <StyledAttendance className="attendance">
      <DynamicHeader headingName="ATTENDANCE" />

      <div className="card-container">
        <Card name="Mark my attendance" onClick={handleMarkAttendance} />
        <Card name="View my attendance" onClick={handleViewAttendance} />
      </div>
    </StyledAttendance>
  );
};

export default Attendance;
