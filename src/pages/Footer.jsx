import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#252525] text-white flex flex-row justify-between font-robotoMono">
      <div className="flex flex-row p-10">
        <div>
          <h1 className="text-2xl font-bold mb-10">ABOUT US</h1>
          <p className="text-sm mb-5 text-gray-400">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex flex-row">
            <FaTwitter size={30} className="mr-2" color="green" />
            <FaFacebook size={30} className="mr-2" color="green" />
            <FaInstagram size={30} color="green" />
          </div>
        </div>
        <div className="flex flex-row mx-[100px]">
          <div className="mx-4 w-[300px]">
            <h1 className="text-2xl font-bold mb-10">SERVICES</h1>
            <p className="text-gray-400 text-sm mb-2">Market Analysis</p>
            <p className="text-gray-400 text-sm mb-2">Accounting Advisor</p>
            <p className="text-gray-400 text-sm mb-2">General Consultancy</p>
            <p className="text-gray-400 text-sm mb-2">Structured Assestment</p>
          </div>
          <div className="mx-4 w-[300px]">
            <h1 className="text-2xl font-bold mb-10">DISCOVER</h1>
            <p className="text-gray-400 text-sm mb-2">About us</p>
            <p className="text-gray-400 text-sm mb-2">Contract us</p>
            <p className="text-gray-400 text-sm mb-2">Terms & Conditions</p>
            <p className="text-gray-400 text-sm mb-2">Policies</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-10">RESOURCES</h1>
            <p className="text-gray-400 text-sm mb-2">Security</p>
            <p className="text-gray-400 text-sm mb-2">Global</p>
            <p className="text-gray-400 text-sm mb-2">Charts</p>
            <p className="text-gray-400 text-sm mb-2">Privacy</p>
          </div>
        </div>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col bg-gray-900 py-6 px-1 items-center"
        >
          <h1 className="font-bold text-2xl">FREE CONSULTATION</h1>
          <input
            type="text"
            placeholder="Your name"
            className="w-[400px] my-4 p-2 rounded-md bg-gray-700"
          />
          <input
            type="text"
            placeholder="Your email"
            className="w-[400px] my-4 p-2 rounded-md bg-gray-700"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-[400px] my-4 p-2 rounded-md bg-gray-700"
          />
          <textarea
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="3"
            className="w-[400px] my-4 p-2 rounded-md bg-gray-700 resize-none"
          />
          <button className="bg-green-500 text-white w-full p-2 rounded-md font-bold mt-2">
            Send A Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
