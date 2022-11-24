import { Link } from "gatsby";
import React from "react";
import Avatar from "../avatar";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instragram";
import TwitterIcon from "../icons/twitter";

const Footer = () => {
  const footerItems = [
    {
      heading: "Location",
      items: [
        {
          text: "America",
          link: "#",
        },
        {
          text: "Asia",
          link: "#",
        },
        {
          text: "Europe",
          link: "#",
        },
        {
          text: "Africa",
          link: "#",
        },
      ],
    },
    {
      heading: "Contact",
      items: [
        {
          text: "About Me",
          link: "#",
        },
        {
          text: "Teams",
          link: "#",
        },
        {
          text: "Profile",
          link: "#",
        },
        {
          text: "FAQ",
          link: "#",
        },
      ],
    },
    {
      heading: "Legals",
      items: [
        {
          text: "Privacy",
          link: "#",
        },
        {
          text: "Disclaimer",
          link: "#",
        },
        {
          text: "Terms",
          link: "#",
        },
        {
          text: "Company",
          link: "#",
        },
      ],
    },
  ];

  return (
    <footer className="py-[60px] xl:py-[140px] bg-[#FBFDFF] px-[50px] lg:px-[150px] flex xl:items-center justify-between xl:flex-row flex-col">
      <div className="xl:mb-0 mb-[20px]">
        <div className="flex items-center">
          <Avatar title="K" variant="black" />
          <h3 className="mb-0 ml-[25px] max-w-[71px] text-[#40434A] font-bold text-xl">
            Kinka Finance
          </h3>
        </div>
        <p className="text-xl text-[#585c65] leading-[180%] max-w-[370px] mt-[26px] mb-[20px] xl:mb-[41px]">
          2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
        </p>
        <div className="flex items-center gap-x-[30px]">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="flex gap-[50px] lg:gap-[150px] flex-wrap">
        {footerItems.map((item) => (
          <div key={item.heading}>
            <h6 className="font-bold text-[20px] text-[#40434a] mb-[30px]">
              {item.heading}
            </h6>
            <ul className="flex flex-col gap-y-[24px]">
              {item.items.map((item) => (
                <li className="text-[18px] text-[#70737c]" key={item.text}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
