import React from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full h-full">
      <Header />

      <main className="w-full h-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
