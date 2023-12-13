import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center bg-[#8FD0D2] pt-[100px] pb-[100px] font-robotoMono relative mb-[300px]">
      <p className="text-sm font-bold tracking-widest mb-4">TESTIMONIES</p>
      <h1 className="text-4xl font-bold tracking-widest mb-10">Happy Clients & Feedbacks</h1>
      <div className="flex flex-row absolute top-52">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
