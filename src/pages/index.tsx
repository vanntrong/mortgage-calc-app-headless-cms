import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Intro from "../components/intro";
import MortgageCalculator from "../components/mortgage-calculator";
import MortgageCalculatorTextBlock from "../components/mortgage-calculator-text-block";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-[#FBFDFF]">
        <Intro />
        <div className="pt-[70px] xl:pt-[272px] flex items-center gap-x-[49px] flex-col-reverse xl:flex-row">
          <MortgageCalculator />
          <MortgageCalculatorTextBlock />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
