import { Link } from "gatsby";
import React from "react";
import Avatar from "../avatar";

const Header = () => {
  const menus = [
    {
      title: "Calculator",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
  ];

  return (
    <div className="bg-primary-900 pl-[50px] xl:pl-[150px] pr-[50px] xl:pr-[127px] flex items-center justify-between w-full pt-[42px]">
      <div className="flex items-center">
        <Avatar title="K" />
        <h3 className="mb-0 ml-5 max-w-[71px] text-white font-bold text-xl">
          Kinka Finance
        </h3>
      </div>
      <div>
        <ul className="flex items-center gap-x-[61px]">
          {menus.map((menu) => (
            <li key={menu.title}>
              <Link
                to={menu.link}
                className="text-white font-normal text-[18px] opacity-60 hover:opacity-80"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
