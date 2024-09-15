import React from "react";
import { StyledHomePage } from "./style";
import Header from "../Header";
import Card from "../Card";

const HomePage = () => {
  return (
    <StyledHomePage className="home-page">
      <Header />
      <div className="card-container">
        <Card name="Employee" />
        <Card name="Student" />
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
