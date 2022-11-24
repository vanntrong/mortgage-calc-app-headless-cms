import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Hero as HeroType } from "../../interfaces/hero.interface";

const Hero = () => {
  const {
    allContentfulHero: { nodes = [] },
  }: HeroType = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulHero {
        nodes {
          description
          id
          image2 {
            url
          }
          image1 {
            url
          }
          button {
            link
            title
          }
          title
        }
      }
    }
  `);

  return (
    <div className="py-[40px] md:py-[80px] lg:py-[180px] lg:pb-[250px] px-[50px] xl:pr-0 xl:pl-[150px] bg-primary-900 flex overflow-hidden">
      <div className="xl:max-w-[546px]">
        <h1 className="font-black text-white text-[42px] lg:text-[62px] mb-6 leading-[130%]">
          {nodes[0].title}
        </h1>
        <p className="tex-[18px] text-white opacity-80 mb-9">
          {nodes[0].description}
        </p>
        <button
          className="font-bold text-[18px] text-white px-[32px] lg:px-[52px] py-[10px] lg:py-[15px] bg-orange-900"
          style={{ boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.05)" }}
        >
          {nodes[0].button.title}
        </button>
      </div>
      <div className="relative w-full xl:block hidden">
        <div className="absolute z-20 right-0">
          <img src={nodes[0].image1.url} alt="Vector 4" />
        </div>
        <div className="absolute z-10 top-1/2 right-0">
          <img src={nodes[0].image2.url} alt="Vector 5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
