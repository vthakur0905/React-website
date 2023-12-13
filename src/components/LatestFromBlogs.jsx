import React from "react";
import LatestCard from "./LatestCard";

const LatestFromBlogs = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center font-robotoMono mb-[100px]">
      <p className="font-bold tracking-widest text-green-500 text-sm">NEWS & BLOG</p>
      <h1 className="font-bold text-3xl tracking-wide mb-8">Latest news from our blog</h1>
      <div className="flex flex-row">
        <LatestCard
          image={
            "https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
          }
        />
        <LatestCard
          image={
            "https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_2.jpg"
          }
        />
        <LatestCard
          image={
            "https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
          }
        />
      </div>
    </div>
  );
};

export default LatestFromBlogs;
