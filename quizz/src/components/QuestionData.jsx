import React, { useEffect, useState } from "react";
import AllQuestion from "./AllQuestion";
import CountDOwnTimer from "../Pages/CountDOwnTimer";
import DisplayQuestion from "./DisplayQuestion";
import { useContext } from "react";
import Context from "../context/Context";

function QuestionData() {
  const [allQuestions, setAllQuestions] = useState(AllQuestion);
  const { quizzIndex, setQuizzIndex } = useContext(Context);

  useEffect(() => {
    setAllQuestions(allQuestions);
  }, [allQuestions]);

  const handleBtnClick = (index) => {
    if (allQuestions[index].visited === false) {
    }
    allQuestions[index].visited = true;
    setQuizzIndex(index);
    // console.log(index)
  };
  return (
    <>
      <div className=" col-md-9 col-12 my-md-5 ps-lg-5">
        <DisplayQuestion
          setQuizzIndex={setQuizzIndex}
          quizzIndex={quizzIndex}
          allQuestions={allQuestions}
        />
      </div>
      <div className=" col-md-3 col-12 sub-box2 pb-3">
        <div className="bg-body-secondary">
          <h3 className="text-center py-3 ">Time Left</h3>
        </div>
        <CountDOwnTimer />
        <div className="questionBox bg-body-secondary text-center  d-flex justify-content-center py-2">
          <h3>Questions</h3>
        </div>
        <div className="squares row my-4 mx-3">
          {allQuestions?.map((item, index) => {
            return (
              <button
                key={index}
                className={` my-1 border-white ${
                  item.submitted && item.visited
                    ? "bg-success"
                    : item.visited
                    ? "bg-warning"
                    : "bg-danger"
                }`}
                onClick={() => {
                  handleBtnClick(index);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="Check pt-2 d-flex row ms-xxl-3 ">
          <div className=" d-flex col-6 col-md-12 col-lg-6 mt-3">
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "red",
                marginTop: "7px",
              }}
            ></span>
            Not Attempted
          </div>
          <div className=" d-flex col-6 col-md-12 col-lg-6 mt-3 text-center">
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "Green",
                marginTop: "7px",
              }}
            ></span>
            Attempted
          </div>
        </div>
        <div className="row  ms-xxl-3 ">
          <div className="d-flex col-6 col-md-12 col-lg-6 mt-3 text-center">
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "orange",
                marginTop: "7px",
              }}
            ></span>{" "}
            Skipped
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionData;
