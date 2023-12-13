import React from "react";
import bestagency from "../assets/bestagency.png";
import {
  FaMoneyBill,
  FaPersonBooth,
  FaPhoenixFramework,
  FaDatabase,
} from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";

const BestAgency = () => {
  return (
    <div className="h-full w-3/5 mx-auto flex justify-center font-robotoMono mb-[100px]">
      <div>
        <img className="h-[700px] w-[1000px]" src={bestagency} alt="" />
      </div>
      <div className="flex flex-col my-auto px-5 ml-10">
        <p className="font-bold text-sm text-green-500 tracking-widest mb-4">
          WELCOME TO ACCOUNTING
        </p>
        <h1 className="font-bold text-3xl mb-10">
          We Are the Best Accounting Agency
        </h1>
        <div>
          <div className="flex flex-row mb-5 items-center">
            <FaPersonBooth size={80} color="green" />
            <div className="ml-10">
              <h1 className="mb-5 text-xl font-bold">Market Analysis</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-5 items-center">
            <FaDatabase size={80} color="green" />
            <div className="ml-10">
              <h1 className="mb-5 text-xl font-bold">Accounting Advisor</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-5 items-center">
            <FaPhoenixFramework size={80} color="green" />
            <div className="ml-10">
              <h1 className="mb-5 text-xl font-bold">General Consultancy</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-5 items-center">
            <FaMoneyBill size={80} color="green" />
            <div className="ml-10">
              <h1 className="mb-5 text-xl font-bold">Structured Assestment</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestAgency;
