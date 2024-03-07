import React, { useEffect, useState } from "react";
import AllQuestion from "./AllQuestion";
import CountDOwnTimer from "../Pages/CountDOwnTimer";
import { useNavigate } from "react-router-dom";
import DisplayQuestion from "./DisplayQuestion";

function QuestionData() {
  
  const [allQuestions, setAllQuestions] = useState(AllQuestion);
  const [quizzIndex, setQuizzIndex] = useState(0);

  useEffect(() => {
    setAllQuestions(allQuestions);
  }, [allQuestions]);



  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/testOver");
  };


  const handleBtnClick = (index) => {
    allQuestions[index].visited = true;
    setQuizzIndex(index);
    // console.log(index)
  };

  return (
    <>
        <div className="col-lg-9 col-md-6 my-5 ps-5">
          <DisplayQuestion setQuizzIndex={setQuizzIndex} quizzIndex={quizzIndex}  allQuestions={allQuestions }/>
        </div>
        <div className="col-lg-3 col-md-6 sub-box2 pb-3">
          <div className="bg-body-secondary">
            <h3 className="text-center py-3 ">Time Left</h3>
          </div>
          <CountDOwnTimer />
          <div className="questionBox bg-body-secondary text-center  d-flex justify-content-center py-2">
            <h3>Questions</h3>
          </div>
          <div className="squares row my-4 mx-3">
            {allQuestions?.map((item,index) => {
              return (
                <button 
                  className={` mx-1 border-white ${
                      item.submitted && item.visited ?"bg-success": item.visited ? "bg-warning" : "bg-danger"
                  }`}
                  onClick={() =>{
                     handleBtnClick(index);
                  }}
                >
                  {index+1}
                </button>
              );
            })}
          </div>
          <div className="Check pt-2">
            <h6 className="d-flex" style={{ lineHeight: "10px" }}>
              <div
                className="mx-2"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "red",
                }}
              ></div>
              Not Attempted
              <div
                className="ms-5 me-2"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "Green",
                }}
              ></div>{" "}
              Attempted
              <div
                className="ms-5 me-2"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "orange",
                }}
              ></div>{" "}
              Skipped
            </h6>
          </div>
          <div className="submitTest mt-5 d-flex justify-content-center">
            <button className="btn btn-lg bg-primary text-light mt-5 px-5 fs-5" onClick={handleClick}>Submit Text</button>
          </div>
        </div>
    </>
  );
}

export default QuestionData;
