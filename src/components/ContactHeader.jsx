import React from "react";
import {
  FaPhone,
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCircle,
} from "react-icons/fa";

const ContactHeader = () => {
  return (
    <div className="w-3/5 h-10 bg-[#413c69] flex justify-between m-auto font-robotoMono">
      <div className="flex flex-row my-auto items-center text-white">
        <FaPhone color="white" className="mx-2" />
        <p className="mr-2 text-sm">+00 1234 567</p>
        <FaTelegram color="white" className="mr-2" />
        <p className="mr-2 text-sm">youremail@email.com</p>
      </div>
      <div className="flex flex-row px-2">
        <button className=" hover:bg-green-500">
          <FaFacebook color="white" className="m-2" />
        </button>
        <button className=" hover:bg-green-500">
          <FaTwitter color="white" className="m-2" />
        </button>
        <button className=" hover:bg-green-500">
          <FaWhatsapp color="white" className="m-2" />
        </button>
        <button className=" hover:bg-green-500">
          <FaCircle color="white" className="m-2" />
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
