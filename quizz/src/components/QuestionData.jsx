import React, { useEffect, useState } from "react";
import AllQuestion from "./AllQuestion";
import CountDOwnTimer from "../Pages/CountDOwnTimer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function QuestionData() {
  const [allQuestions, setAllQuestions] = useState(AllQuestion);
  const [question, setQuestion] = useState(AllQuestion[0]);

  useEffect(() => {
    setAllQuestions(AllQuestion);
  }, [allQuestions]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/testOver");
  };
  if (AllQuestion[0]) {
    AllQuestion[0].visited = true;
  }
  const prevBtn = (id) => {
    const findQue = allQuestions.find((current) => current.id === id);
    console.log(findQue,"------------findQue");
    if (id === 0) {
      AllQuestion[AllQuestion.length-1].visited = true;
      setQuestion(allQuestions[AllQuestion.length-1]);

    }else{
      findQue.visited = true;
      setQuestion(findQue)
    }

  };
  const nextBtn = (id) => {
    const findQue = allQuestions.find((current) => current.id === id);
    
    if (id === AllQuestion.length+1) {
      setQuestion(allQuestions[0]);
    console.log(id);
    }else{
      findQue.visited = true;
      console.log(findQue);
      setQuestion(findQue);
    }
  };
  const submitBtn = (id) => {
    const findQue = allQuestions.find((current) => current.id === id);

    if (id > AllQuestion.length) {
      setQuestion(AllQuestion[0]);
    }else{
      findQue.submitted = true;
    findQue.visited = true;
    setQuestion(findQue);

    }
  };
  const handleBtnClick = (item) => {
    item.visited = true;

    setQuestion(item);
  };

  return (
    <>
      <div className="row bg-body-tertiary">
        <div className="col-lg-9 col-md-6 my-5 ps-5">
          <div className="main ms-5 mt-5">
            <h1>Question : {question?.id}</h1>
            <hr className="w-75" />
            <div className="sub-box mt-5">
              <h5>
                Q {question?.id} - {question?.Question}
              </h5>
              <ol type="A" className="mt-5 fs-5 col-3">
                <h5>
                  <input type="radio" className="me-2" name="option" /> A.{" "}
                  {question?.OptionA}
                </h5>
                <h5>
                  <input type="radio" className="me-2" name="option" /> B.{" "}
                  {question?.OptionB}
                </h5>
                <h5>
                  <input type="radio" className="me-2" name="option" /> C.{" "}
                  {question?.OptionC}
                </h5>
                <h5>
                  <input type="radio" className="me-2" name="option" /> D.{" "}
                  {question?.OptionD}
                </h5>
              </ol>
            </div>
            <div className="button-group mt-5">
              <button
                className="btn btn-lg bg-success text-light me-3"
                onClick={() => {
                  prevBtn(question?.id - 1);
                }}
              >
                Prev
              </button>
              <button
                className="btn btn-lg bg-success text-light me-5"
                onClick={() => {
                  nextBtn(question?.id + 1);
                }}
              >
                Next
              </button>
              <button
                className="btn btn-lg bg-primary text-light me-5"
                onClick={() => {
                  submitBtn(question?.id);
                }}
              >
                Submit
              </button>
            </div>
          </div>
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
            {allQuestions?.map((item) => {
              return (
                <button
                  className={` mx-1 border-white ${
                      item.submitted && item.visited ?"bg-success": item.visited ? "bg-warning" : "bg-danger"
                  }`}
                  onClick={() => handleBtnClick(item)}
                  key={item.id}
                >
                  {item.id}
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
      </div>
    </>
  );
}

export default QuestionData;
