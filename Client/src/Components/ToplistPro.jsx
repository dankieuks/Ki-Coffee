import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import coffeeBanner from "../Assets/coffeebanner.png";
import Slider from "react-slick";

import Typewriter from "typewriter-effect";

function ToplistPro() {
  const [first, setFirst] = useState(0);

  const items = [
    "https://www.foodiesfeed.com/wp-content/uploads/2023/10/glass-of-ice-tea.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/10/iced-black-tea-peach.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/10/sparkling-water-with-lime.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-beetroot-carrot-juice.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/10/hot-chocolate.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/09/a-glass-of-carrot-juice.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2023/10/coffee-book.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setFirst(next),
    centerMode: true,
    centerPadding: "0",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="rounded-3xl mt-[50px]  ">
      <Slider
        {...settings}
        className="rounded-md   flex items-center justify-center "
      >
        {items.map((img, index) => (
          <div
            className={index === first ? "slide slide-active   " : "slide"}
            key={index}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w h-[200px] py-5 md:w-full rounded-3xl md:h-[250px]  "
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ToplistPro;
