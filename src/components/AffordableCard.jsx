import React from "react";

const AffordableCard = ({ name, cost }) => {
  return (
    <div className="mx-4">
      <div className="flex flex-col items-center bg-white p-10 rounded-md shadow-lg">
        <p className="font-bold text-green-500 tracking-wide mb-8">{name}</p>
        <div className="flex flex-row mb-8">
          <p className="text-2xl text-gray-500 mr-2">$</p>
          <h1 className="text-5xl font-bold">{cost}</h1>
          <p className="text-sm text-gray-500 ml-2">/mos</p>
        </div>
        <div>
          <p className="mb-4">✔️ Brand Strategy</p>
          <p className="mb-4">✔️ Online Marketing</p>
          <p className="mb-4">✔️ Branding Services</p>
          <p className="mb-4">✔️ Creative Marketing</p>
          <p className="mb-4">✔️ Sales Marketing</p>
        </div>
      </div>
      <button className="flex mx-auto justify-center items-center bg-green-500 w-[200px] p-3 text-white font-bold rounded-md mt-[-25px]">
        Get Started
      </button>
    </div>
  );
};

export default AffordableCard;
