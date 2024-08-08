import React, { ReactNode } from "react";
import Header from "./Header/Header";
import NavBar from "./Header/NavBar";
import HeaderSider from "./Header/HeaderSider";
import Footer from "./Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <section className="grid grid-cols-6">
      <HeaderSider />
      <Header />
      <NavBar />
      <main className="col-span-6 mx-0 md:mx-36 ">{children}</main>
      <Footer />
    </section>
  );
}

export default DefaultLayout;
