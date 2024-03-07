import React, { useEffect, useState } from "react";

function DisplayQuestion({ setQuizzIndex, quizzIndex, allQuestions }) {
  const [question, setQuestion] = useState(allQuestions[quizzIndex]);

  useEffect(() => {
    setQuestion(allQuestions[quizzIndex]);
  }, [quizzIndex, allQuestions]);

  const prevBtn = (index) => {
    if (index !== -1) {
      setQuizzIndex(index);
      allQuestions[quizzIndex - 1].visited = true;
    } else {
      setQuizzIndex(29);
      allQuestions[29].visited = true;
    }
  };
  const nextBtn = (index) => {
    if (index !== 30) {
      setQuizzIndex(index);
      allQuestions[quizzIndex + 1].visited = true;
    } else {
      setQuizzIndex(0);
      allQuestions[0].visited = true;
    }
  };
  const submitBtn = (index) => {
    if (index !== 30) {
      setQuizzIndex(index);
      allQuestions[quizzIndex + 1].visited = true;
      allQuestions[quizzIndex].submitted = true;
    } else {
      setQuizzIndex(0);
      allQuestions[0].visited = true;
      allQuestions[29].submitted = true;
    }
  };

  return (
    <>
      <div className="main ms-5 mt-5">
        <h1>Question : {quizzIndex + 1}</h1>
        <hr className="w-75" />
        <div className="sub-box mt-5">
          <h5>
            Q {quizzIndex + 1} - {question.Question}
          </h5>
          <ol type="A" className="mt-5 fs-5 col-3">
            <div className="form-check">
              <h5>
                <input
                  type="radio"
                  className="me-2 form-check-input"
                  name="option"
                />{" "}
                A. {question.OptionA}
              </h5>
            </div>
            <h5>
              <input
                type="radio"
                className="me-2 form-check-input"
                name="option"
              />{" "}
              B. {question.OptionB}
            </h5>
            <h5>
              <input
                type="radio"
                className="me-2 form-check-input"
                name="option"
              />{" "}
              C. {question.OptionC}
            </h5>
            <h5>
              <input
                type="radio"
                className="me-2 form-check-input"
                name="option"
              />{" "}
              D. {question.OptionD}
            </h5>
          </ol>
        </div>
        <div className="button-group mt-5">
          <button
            className="btn btn-lg bg-success text-light me-3"
            onClick={() => {
              prevBtn(quizzIndex - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-lg bg-success text-light me-5"
            onClick={() => {
              nextBtn(quizzIndex + 1);
            }}
          >
            Next
          </button>
          <button
            className="btn btn-lg bg-primary text-light me-5"
            onClick={() => {
              submitBtn(quizzIndex + 1);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default DisplayQuestion;
