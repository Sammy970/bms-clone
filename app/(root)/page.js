import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import React from "react";

const images = [
  {
    src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1696064777807_web.jpg",
    alt: "image1",
  },
  {
    src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1697441819049_sunburnpunedesktop.jpg",
    alt: "image2",
  },
  {
    src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1697792569525_shreyaghoshaloctdesktop.jpg",
    alt: "image3",
  },
  {
    src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1696400907176_navratridesktop.jpg",
    alt: "image4",
  },
];

const page = () => {
  return (
    <section className="w-full">
      <section className="w-full block max-sm:hidden">
        <Carousel images={images} />
      </section>
      <section className="w-[85%] m-auto">
        <Banner />
      </section>
    </section>
  );
};

export default page;
