import React from "react";
import ToplistPro from "../Components/ToplistPro";
import DiscountCode from "../Components/DiscountCode";
import Banner from "../Components/Banner";
import BestSeller from "../Components/BestSeller";

function Home() {
  return (
    <section className="m-2">
      <Banner />
      <DiscountCode />
      <BestSeller />
      <ToplistPro />
    </section>
  );
}

export default Home;
