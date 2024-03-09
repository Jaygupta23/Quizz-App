import React, { useContext } from "react";
import Context from "../context/Context";
import AllQuestion from "../components/AllQuestion";

function TextEnd() {
  const { answer } = useContext(Context);
  let SkipCount = 0;
  for (let i = 0; i <= AllQuestion.length - 1; i++) {
    if (AllQuestion[i].visited === true && AllQuestion[i].submitted === false) {
      SkipCount = SkipCount + 1;
    }
  }
  
  return (
    <>
      <div className=" pt-5 bg-success text-center text-light mt-5 py-5">
        <h1>Your Test Has Been Submitted</h1>
        <h2>Thank You for Completing Quizz</h2>
        <h3>You Have scored 74%</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-md-5">
            <ul className="list-group bg-secondary">
              <li className="list-group-item bg-body-secondary d-flex justify-content-between align-items-center text-success fs-2">
                Submitted
                <span className="badge text-bg-success rounded-pill">
                  {answer.length}
                </span>
              </li>

              <li className="list-group-item bg-body-secondary d-flex justify-content-between align-items-center text-warning fs-2">
                Not Submitted
                <span className="badge text-bg-warning text-light rounded-pill">
                  {SkipCount}
                </span>
              </li>
              <li className="list-group-item bg-body-secondary d-flex justify-content-between align-items-center text-danger fs-2">
                Not Attempted
                <span className="badge text-bg-danger rounded-pill">
                  {AllQuestion.length - answer.length - SkipCount}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-5  offset-md-1 mt-5">
            <div className="bg-body-secondary py-3 answersheet">
              {answer.map((item) => {
                return (
                  <ul>
                    <li>
                      ({item.id + 1}) -- {item.selectedOption}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextEnd;
