import React from "react";
import { FaComment } from "react-icons/fa";

const TestimonialsCard = () => {
  return (
    <div className="mx-4">
      <div className="bg-white w-[400px] py-6 px-4 rounded-md shadow-lg">
        <p className="text-sm tracking tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nulla
          excepturi dolorum assumenda quo voluptates deleniti elit.
        </p>
        <div className="flex flex-row p-4 items-center">
          <img
            className="rounded-full mr-4"
            width={120}
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">Roger Scott</h1>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
