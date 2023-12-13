import React from "react";

const SignUpEmail = () => {
  return (
    <div className="bg-[#8FD0D2] flex flex-row justify-evenly py-10 items-center font-robotoMono">
      <h1 className="text-2xl">
        Sign Up for Your Free 1st Accounting Consultation
      </h1>
      <div className="flex flex-row items-center bg-green-500 rounded-md">
        <input
          placeholder="Enter email address"
          type="text"
          className="p-3 w-[300px] rounded-md outline-none"
        />
        <p className="p-2 text-white font-bold">Subscribe</p>
      </div>
    </div>
  );
};

export default SignUpEmail;
