import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import QuestionData from "../components/QuestionData";
function Test() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid ">
          <Link className="navbar-brand mx-auto text-light fs-3" to="/test">
            Online Test Preparation
          </Link>          
        </div>
      </nav>
      <div className="container-fluid">
      <div className="row bg-body-tertiary">
        <QuestionData />
        </div>
      </div>
    </>
  );
}

export default Test;
