import React from "react";
import {
  AiFillMoneyCollect,
  AiOutlineStock,
  AiOutlineMoneyCollect,
  AiFillAccountBook,
} from "react-icons/ai";

const Information = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex flex-row mx-[250px] font-robotoMono justify-evenly ml-10">
        <div className="relative">
          <div>
            <AiFillMoneyCollect size={80} opacity={0.2} />
          </div>
          <div className="absolute top-4 left-10 w-[250px]">
            <h1 className="text-2xl font-bold mb-4">Accounting</h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="relative">
          <div>
            <AiOutlineStock size={80} opacity={0.2} />
          </div>
          <div className="absolute top-4 left-10 w-[250px]">
            <h1 className="text-2xl font-bold mb-4">
              Tax, Compliance & Payroll
            </h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="relative">
          <div>
            <AiOutlineMoneyCollect size={80} opacity={0.2} />
          </div>
          <div className="absolute top-4 left-10 w-[250px]">
            <h1 className="text-2xl font-bold mb-4">Financial Services</h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="relative">
          <div>
            <AiFillAccountBook size={80} opacity={0.2} />
          </div>
          <div className="absolute top-4 left-10 w-[250px]">
            <h1 className="text-2xl font-bold mb-4">Growth & Funding Access</h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[200px] justify-evenly mx-[200px] items-center ml-[140px] font-robotoMono">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-500 mb-3">50</h1>
          <p className="tracking-widest text-sm">YEARS OF EXPERIENCE</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-500 mb-3">8500</h1>
          <p className="tracking-widest text-sm">CASES COMPLETED</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-500 mb-3">20</h1>
          <p className="tracking-widest text-sm">AWARDS WON</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-green-500 mb-3">50</h1>
          <p className="tracking-widest text-sm">EXPERT CONSULTANT</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
