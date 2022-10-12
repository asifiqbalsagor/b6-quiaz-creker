import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayQuiz = ({ quiz, data }) => {
  // console.log(quiz, data);
  const { options, question, correctAnswer } = quiz;

  const ShowRightAnswer = () => {
    if (true) {
      toast.success(correctAnswer, { autoClose: 500 });
    }
  };

  const handleRadioBox = (e) => {
    if (correctAnswer === e) {
      toast.success("correct answer", { autoClose: 500 });
      // console.log(correctAnswer);
    } else {
      toast.error("incorrect answer", { autoClose: 500 });
    }
  };

  return (
    
      <div className="border my-5 shadow-2xl rounded-2xl p-5 ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="">
            <h1 className="text-xl m-2">{question}</h1>
          </div>
          <div className="">
            <EyeSlashIcon
              onClick={ShowRightAnswer}
              className="h-6 w-6 text-black"
            />
          </div>
          <ToastContainer />
        </div>

        <div className="grid grid-cols-2">
          <div className="form-control p-3 m-3 bg-slate-200 rounded">
            <label className="label cursor-pointer">
              <span className="label-text">{options[0]}</span>
              <input
                type="radio"
                onClick={(e) => handleRadioBox(e.target.innerText)}
                name="radio-4"
                className="radio radio-accent checkbox-primary"
              />
            </label>
          </div>
          <div className="form-control p-3 m-3 bg-slate-200 rounded">
            <label className="label cursor-pointer">
              <span className="label-text">{options[1]}</span>
              <input
                type="radio"
                onClick={(e) => handleRadioBox(e.target.innerText)}
                name="radio-4"
                className="radio radio-accent checkbox-primary"
              />
            </label>
          </div>
          <div className="form-control p-3 m-3 bg-slate-200 rounded">
            <label className="label cursor-pointer">
              <span className="label-text">{options[2]}</span>
              <input
                type="radio"
                onClick={(e) => handleRadioBox(e.target.innerText)}
                name="radio-4"
                className="radio radio-accent checkbox-primary"
              />
            </label>
          </div>
          <div className="form-control p-3 m-3 bg-slate-200 rounded">
            <label className="label cursor-pointer">
              <span className="label-text">{options[3]}</span>
              <input
                type="radio"
                onClick={(e) => handleRadioBox(e.target.innerText)}
                name="radio-4"
                className="radio radio-accent checkbox-primary"
              />
            </label>
          </div>
        </div>
      </div>
  );
};

export default DisplayQuiz;
