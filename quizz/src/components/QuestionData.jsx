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
      <div className=" col-md-8 col-12 my-md-5 ps-lg-5 main1">
        <DisplayQuestion
          setQuizzIndex={setQuizzIndex}
          quizzIndex={quizzIndex}
          allQuestions={allQuestions}
        />
      </div>
      <div className=" col-md-4 col-12 sub-box2 pb-3">
        <div className="bg-body-secondary">
          <h3 className="text-center py-3 " style={{color: "#0DAD8E"}}>Time Left</h3>
        </div>
        <CountDOwnTimer />
        <div className="questionBox bg-body-secondary text-center  d-flex justify-content-center py-2">
          <h3 style={{color: "#0DAD8E"}}>Question Group</h3>
        </div>
        <div className="squares row my-4 mx-3">
          {allQuestions?.map((item, index) => {
            return (
              <button
                key={index}
                className={` my-1 border-0 `}
                
                style={{
                  background:
                    item.submitted && item.visited ? "#0DAD8E" :
                    item.visited ? "#F7BD01" :
                    "#BF1C23"
                }}
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
          <div className=" d-flex col-6 col-md-12 col-lg-6 mt-3" style={{color: "#BF1C23", fontWeight: "500"}}>
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "#BF1C23",
                marginTop: "7px",
              }}
            ></span>
            Not Attempted
          </div>
          <div className=" d-flex col-6 col-md-12 col-lg-6 mt-3 text-center" style={{color: "#0DAD8E", fontWeight: "500"}}>
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "#0DAD8E",
                marginTop: "7px",
              }}
            ></span>
            Attempted
          </div>
        </div>
        <div className="row  ms-xxl-3 ">
          <div className="d-flex col-6 col-md-12 col-lg-6 mt-3 text-center " style={{color: "#F7BD01", fontWeight: "500"}}>
            <span
              className=" me-2"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "#F7BD01",
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
