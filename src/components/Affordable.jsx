import React from "react";
import AffordableCard from "./AffordableCard";

const Affordable = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F8F9FD] py-[100px] font-robotoMono tracking-wide">
      <p className="text-green-500 font-bold tracking-wide text-sm mb-[10px]">
        PRICE & PLANS
      </p>
      <h1 className="font-bold text-4xl tracking-wide mb-[60px]">
        Affordable Packages
      </h1>
      <div className="flex flex-row">
        <AffordableCard name={"PERSONAL"} cost={"49"} />
        <AffordableCard name={"BUSINESS"} cost={"79"} />
        <AffordableCard name={"ULTIMATE"} cost={"109"} />
        <AffordableCard name={"PREMIUM"} cost={"149"} />
      </div>
    </div>
  );
};

export default Affordable;
