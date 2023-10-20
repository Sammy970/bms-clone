import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-10">
      <Image
        src={
          "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/slug-navratri-collection-202309251241.jpg"
        }
        width={1440}
        height={120}
        alt="banner"
        className="w-full h-full rounded-[16px]"
      />
    </div>
  );
};

export default Banner;
