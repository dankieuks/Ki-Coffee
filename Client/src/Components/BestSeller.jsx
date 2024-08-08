import { BiCartAdd } from "react-icons/bi";
import { BiCartDownload } from "react-icons/bi";
import * as React from "react";
import Rating from "@mui/material/Rating";
import { FaShoppingCart, FaStar } from "react-icons/fa";
function BestSeller() {
  const [value, setValue] = React.useState(2);
  const drinks = [
    {
      name: "Cà Phê Sữa Đá",
      description: "Hương vị đậm đà, thơm ngon",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg",
      salePrice: "30.000",
      originalPrice: "40.000",
      discount: 25,
    },
    {
      name: "Trà Sữa Trân Châu",
      description: "Ngọt ngào, thơm ngon với trân châu dai dai",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg",
      salePrice: "25.000",
      originalPrice: "35.000",
      discount: 29,
    },
    {
      name: "Trà Sữa Trân Châu",
      description: "Ngọt ngào, thơm ngon với trân châu dai dai",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash.jpg",
      salePrice: "25.000",
      originalPrice: "35.000",
      discount: 29,
    },
    {
      name: "Trà Sữa Trân Châu",
      description: "Ngọt ngào, thơm ngon với trân châu dai dai",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/10/hot-chocolate.jpg",
      salePrice: "25.000",
      originalPrice: "35.000",
      discount: 29,
    },
    {
      name: "Trà Sữa Trân Châu",
      description: "Ngọt ngào, thơm ngon với trân châu dai dai",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/09/a-glass-of-carrot-juice.jpg",
      salePrice: "25.000",
      originalPrice: "35.000",
      discount: 29,
    },
    {
      name: "Trà Sữa Trân Châu",
      description: "Ngọt ngào, thơm ngon với trân châu dai dai",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/09/healthy-beetroot-carrot-juice.jpg",
      salePrice: "25.000",
      originalPrice: "35.000",
      discount: 29,
    },
  ];
  return (
    <div>
      <header className="bg-red-500 text-white mt-[25px] p-4 text-center text-2xl">
        HOT SALE CUỐI TUẦN
      </header>

      <div className="grid grid-cols-2 gap-x-0 md:gap-x-8 gap-y-9 my-12 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {drinks.map((drink, index) => (
          <div
            key={index}
            className="relative h-[215px] md:h-[265px] w-[165px] md:w-[175px] lg:w-[210px] rounded-3xl border bg-red-300 p-4 pt-20 flex flex-col items-center"
          >
            <img
              src={drink.image}
              alt={drink.name}
              className="absolute top-[-30px] right-[-10px] md:right-[-20px] h-[120px] w-[120px] md:w-[150px] md:h-[150px] lg:w-[150px] lg:h-[150px] object-cover rounded-full mb-16"
            />
            <div className="absolute bottom-5 bg-slate-400 p-3 rounded-tl-[35px] rounded-br-[35px] w-full flex flex-col items-center">
              <h2 className="text-white text-sm md:text-sm  lg:text-lg font-bold relative group">
                {drink.name}
                <div className="absolute left-0 top-full  rounded-tl-[35px] rounded-br-[35px]  bg-green-200 text-black sm:hidden text-xs md:text-sm p-4 mt-2 hidden group-hover:block">
                  {drink.description}
                </div>
              </h2>
              <p className="text-white text-xs md:text-sm">{drink.salePrice}</p>
              <div className="flex justify-between items-center gap-4 md:gap-12 ">
                <Rating
                  sx={{ fontSize: "18px" }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <button className="  text-white rounded flex items-center">
                  <BiCartAdd className="text-red-600- text-3xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
