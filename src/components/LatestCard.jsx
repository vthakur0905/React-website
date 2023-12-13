import React from "react";
import { AiFillMessage } from "react-icons/ai";

const LatestCard = ({ image }) => {
  return (
    <div className="w-[400px] shadow-md p-8 mx-1">
      <img className="rounded-md" src={image} alt="a" />
      <div className="flex flex-row text-sm items-center mt-4">
        <p className=" mr-2 text-gray-500 hover:text-black hover:cursor-pointer">
          MARCH 31, 2020 ADMIN
        </p>
        <AiFillMessage
          color="green"
          className="mr-1 hover:text-black hover:cursor-pointer"
        />
        <p className="text-green-500 hover:text-black hover:cursor-pointer">
          3
        </p>
      </div>
      <p className="my-4 text-lg hover:text-green-500 hover:cursor-pointer">
        Even the all-powerful Pointing has no control about the blind texts
      </p>
    </div>
  );
};

export default LatestCard;
