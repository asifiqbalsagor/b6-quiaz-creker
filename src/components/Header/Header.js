import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-2 w-10/12 mx-auto mt-10 mb-10">
        {/* <div className=" card w-full bg-base-100 shadow-xl header-bg"> */}
        <div>
          <img
            className="w-8/12"
            src="https://media.istockphoto.com/photos/yellow-question-mark-on-a-background-of-black-signs-faq-concept-picture-id1308986719?b=1&k=20&m=1308986719&s=170667a&w=0&h=-vJ0pQHGn5CZcvzETX6PhRQ8I30z5--gNR93BDFVgxo="
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Improve your skills with quizzes. </h2>
          <p>
            Text your skills by answering quizzes on four topics. You can see multiple quizzes on one topic here. You can easily inject your knowledge improve. And you can give practical answer on each topic.
            And you will know whether your answer is right or wrong. And here in
            the blog there are some questions and also answers..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
