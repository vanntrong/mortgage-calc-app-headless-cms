import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Intro as IntroType } from "../../interfaces/intro.interface";
import CheckedIcon from "../icons/checked";

const Intro = () => {
  const {
    allContentfulIntro: { nodes = [] },
  }: IntroType = useStaticQuery(graphql`
    query IntroQuery {
      allContentfulIntro {
        nodes {
          id
          title
          items {
            id
            title
            description
          }
        }
      }
    }
  `);

  return (
    <div className="pt-[60px] xl:pt-[160px]">
      <h2 className="max-w-[679px] mx-auto text-center font-black text-[40px] lg:text-[60px] leading-[140%] mb-[60px] text-[#27292E]">
        {nodes[0].title}
      </h2>
      <div className="px-[50px] xl:px-[151px] flex-wrap flex gap-[35px]">
        {nodes[0].items.map((item) => (
          <div
            className="bg-white lg:basis-1/3 py-[50px] px-[35px]"
            style={{ boxShadow: "0px 4px 120px rgba(58, 86, 78, 0.07)" }}
            key={item.id}
          >
            <div className="mx-auto w-[97px] h-[97px] flex items-center justify-center bg-orange-900 mb-[45px]">
              <CheckedIcon />
            </div>
            <h4 className="text-center font-bold text-[30px] text-[#27292E] mb-[25px]">
              {item.title}
            </h4>
            <p className="text-[18px] leading-[180%] text-[#5f626b] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
