import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const banner = [
    {
      img: "https://file.hstatic.net/1000075078/file/web_desktop_b2e790a4bf954ae5978e9c6966fefde0.jpg",
    },
    {
      img: "https://file.hstatic.net/1000075078/file/web_moi_-_desktop_49c6dc867455448da79e6e0410d9aa4f.jpg",
    },
    {
      img: "https://file.hstatic.net/1000075078/file/web_moi_-_desktop_210134a00b17433083574843d4e7e6a6.jpg",
    },
    {
      img: "https://file.hstatic.net/1000075078/file/web_moi_-_desktop_687047c996304469a9d19698fa98e617.jpg",
    },
  ];

  return (
    <section className="rounded-2xl h-[150px]  lg:h-[350px]  ">
      <Slider {...settings} className=" ">
        {banner.map((banners, index) => (
          <div key={index}>
            <img
              src={banners.img}
              alt=""
              className="h-[170px] lg:h-[350px] xl:h-[400px]  w-full rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Banner;
