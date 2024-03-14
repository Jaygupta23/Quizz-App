import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneContainer } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { useContext } from "react";
import Context from "../context/Context";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {  RxCross1 } from "react-icons/rx";

function DisplayQuestion({ allQuestions }) {
  const { answer, setAnswer, setQuizzIndex, quizzIndex } = useContext(Context);
  const [question, setQuestion] = useState(allQuestions[quizzIndex]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setQuestion(allQuestions[quizzIndex]);
    setSelectedOption(allQuestions[quizzIndex].answer);
  }, [quizzIndex, allQuestions, answer]);

  const handleOptionSelect = (optionValue) => {
    setSelectedOption(optionValue);
  };
  const prevBtn = (index) => {
    if (index !== -1) {
      setQuizzIndex(index);
      if (allQuestions[index].visited === false) {
        allQuestions[index].visited = true;
      }
    } else {
      setQuizzIndex(allQuestions.length - 1);
      if (allQuestions[allQuestions.length - 1].visited === false) {
        allQuestions[allQuestions.length - 1].visited = true;
      }
    }
  };
  const nextBtn = (index) => {
    if (index !== 50) {
      setQuizzIndex(index);
      if (allQuestions[index].visited === false) {
        allQuestions[index].visited = true;
      }
    } else {
      setQuizzIndex(0);
      if (allQuestions[0].visited === false) {
        allQuestions[0].visited = true;
      }
    }
  };

  const submitBtn = (index) => {
    nextBtn(index + 1);
    allQuestions[index].submitted = true;
    allQuestions[quizzIndex].answer = selectedOption;
    const exist = answer.find((current) => current.id === index);

    if (exist) {
      let updatedArray = [...answer];
      updatedArray[index] = {
        id: index,
        selectedOption: selectedOption,
      };
      setAnswer(updatedArray);
    } else {
      setAnswer((answer) => {
        return [
          ...answer,
          {
            id: index,
            selectedOption: selectedOption,
          },
        ];
      });

      setSelectedOption("");
    }
  };

  return (
    <>
      <div className="main mx-lg-5 mx-md-3 mx-sm-5 mt-md-5 mt-3 ">
        <div className="container-fluid d-flex ">
          <h1
            className="questionHead mt-2 mt-md-0"
            style={{ color: "#0DAD8E" }}
          >
            <AiTwotoneContainer className="mb-2 " /> Question : {quizzIndex + 1}
          </h1>
          <div className="submitTest mx-md-auto mt-1 ms-4 submitbutton">
            <Link
              to={"/testOver"}
              state={{ answer, quizzIndex }}
              className="btn btn-lg text-light px-lg-5 submitbutton"
              style={{ backgroundColor: "#0DAD8E" }}
            >
              Finish test <FaClipboardCheck className="mb-1" />
            </Link>
          </div>
        </div>
        <hr className="w-75 " />
        <div className="sub-box mt-5 ">
          <h4 className="questions">
            Q {quizzIndex + 1} - {question.Question}
          </h4>
          <ol type="A" className="mt-5 fs-5 col-3">
            <div className="form-check">
              <h6 className="questions">
                <input
                  type="radio"
                  className="me-2 "
                  name="option"
                  id="select1"
                  value={question.OptionA}
                  checked={selectedOption === question.OptionA}
                  onChange={() => handleOptionSelect(question.OptionA)}
                />
                <label htmlFor="select1" className="fs-6"> {question.OptionA} </label>
              </h6>
            </div>
            <div className="form-check">
              <h6 className="questions">
                <input
                  type="radio"
                  className="me-2 "
                  name="option"
                  id="select2"
                  value={question.OptionB}
                  checked={selectedOption === question.OptionB}
                  onChange={() => handleOptionSelect(question.OptionB)}
                  
                />
                <label htmlFor="select2" className="fs-6"> {question.OptionB} </label>
              </h6>
            </div>
            <div className="form-check">
              <h6 className="questions">
                <input
                  type="radio"
                  id="select3"
                  className="me-2"
                  name="option"
                  value={question.OptionC}
                  checked={selectedOption === question.OptionC}
                  onChange={() => handleOptionSelect(question.OptionC)}
                
                />
               <label htmlFor="select3" className="fs-6"> {question.OptionC} </label>
              </h6>
            </div>
            <div className="form-check">
              <h6 className="questions">
                <input
                  type="radio"
                  className="me-2 "
                  name="option"
                  id="select4"
                  value={question.OptionD}
                  checked={selectedOption === question.OptionD}
                  onChange={() => handleOptionSelect(question.OptionD)}
                 
                />
                <label htmlFor="select4" className="fs-6"> {question.OptionD} </label>
              </h6>
            </div>
          </ol>
        </div>
        <div className="button-group my-5">
          <button
            className="btn btn-lg text-light me-3 ms-2 btnGrp"
            style={{ backgroundColor: "#0DAD8E" }}
            onClick={() => {
              prevBtn(quizzIndex - 1);
            }}
          >
            <GrFormPreviousLink className="fs-2 " />
          </button>
          <button
            className="btn btn-lg text-light me-5 btnGrp"
            style={{ backgroundColor: "#0DAD8E" }}
            onClick={() => {
              nextBtn(quizzIndex + 1);
            }}
          >
            <GrFormNextLink className="fs-2" />
          </button>
          <button
            className="btn btn-lg text-light btnsubmit"
            disabled={selectedOption ? false : true}
            style={{ backgroundColor: "#0DAD8E" }}
            onClick={() => {
              submitBtn(quizzIndex);
            }}
          >
            Submit{" "}
            {selectedOption ? <IoMdCheckmarkCircleOutline className="fs-3"/> : <RxCross1 className="fs-4" />}
          </button>
        </div>
      </div>
    </>
  );
}

export default DisplayQuestion;
