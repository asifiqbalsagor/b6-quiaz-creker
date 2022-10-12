import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
            <div className="grid grid-cols-2 w-10/12 mx-auto mt-10 mb-10">
            {/* <div className=" card w-full bg-base-100 shadow-xl header-bg"> */}
                 <div>
                      <img className="w-8/12" src="https://media.istockphoto.com/photos/yellow-question-mark-on-a-background-of-black-signs-faq-concept-picture-id1308986719?b=1&k=20&m=1308986719&s=170667a&w=0&h=-vJ0pQHGn5CZcvzETX6PhRQ8I30z5--gNR93BDFVgxo=" alt="" />
               </div>
        <div>
          <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam magni animi laboriosam nam mollitia sequi atque veniam quam consequatur doloribus quia deleniti vitae voluptatibus ipsa consectetur, nemo nobis, impedit eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
