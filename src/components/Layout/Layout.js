import React from "react";

import Navbar from "./navbar";
import { FooterWithSocialLinks } from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col  min-h-screen">
      <Navbar />

      <main className="py-[2rem] flex-grow bg-myWhite text-shark x-6 xl:px-32">
        {children}
      </main>

      <FooterWithSocialLinks />
    </div>
  );
};

export default Layout;
