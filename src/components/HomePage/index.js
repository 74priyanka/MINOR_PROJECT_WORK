import React from "react";
import { StyledHomePage } from "./style";
import Header from "../Header";
import Card from "../Card";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEmployee = () => {
    navigate("/Employee");
  };

  const handleStudent = () => {
    navigate("/Attendance");
  };

  return (
    <StyledHomePage className="home-page">
      <Header />
      <div className="card-container">
        <Card name="Employee" onClick={handleEmployee} />
        <Card name="Student" onClick={handleStudent} />
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
