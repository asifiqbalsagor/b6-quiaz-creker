import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayQuiz = ({ quiz, index }) => {
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
          <span className="text-2xl text-blue-700">
            {" "}
            Quiz {index === 0 ? (index = 1) : index + 1}
          </span>
          <h1 className="text-xl m-2">{question.slice(3, -4)}</h1>
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
          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[0]}{" "}
          </button>
        </div>
        <div className="form-control p-3 m-3 bg-slate-200 rounded">
          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[1]}{" "}
          </button>
        </div>
        <div className="form-control p-3 m-3 bg-slate-200 rounded">
          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[2]}{" "}
          </button>
        </div>
        <div className="form-control p-3 m-3 bg-slate-200 rounded">
          <button
            className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
            onClick={(e) => handleRadioBox(e.target.innerText)}
          >
            {" "}
            {options[3]}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayQuiz;
