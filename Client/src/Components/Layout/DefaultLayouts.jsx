import React from "react";
import Header from "./Header/Header";

function DefaultLayout({ children }) {
  return (
    <section className="  ">
      <Header />
      <main className="grid grid-cols-6 w-full col-span-6 mx-0 md:mx-36">
        {children}
      </main>
    </section>
  );
}

export default DefaultLayout;
