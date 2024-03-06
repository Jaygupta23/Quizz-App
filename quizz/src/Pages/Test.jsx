import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import QuestionData from "../components/QuestionData";
function Test() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid ">
          <Link className="navbar-brand mx-auto text-light fs-3" to="/">
            Online Test Preparation
          </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
      <div className="container-fluid">
        <QuestionData />
      </div>
    </>
  );
}

export default Test;
