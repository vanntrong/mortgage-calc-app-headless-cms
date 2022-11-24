import React from "react";

const MortgageCalculator = () => {
  return (
    <div className="bg-black-900 pl-[46px] lg:pl-[151px] pr-[46px] pt-[65px] pb-[69px] basis-1/2">
      <h4 className="text-white font-black text-[50px] leading-[140%] mb-0">
        Mortgage Calculator
      </h4>
      <p className="text-[18px] text-white leading-[180%] max-w-[420px] opacity-80 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div className="grid grid-cols-2 gap-x-[23px] gap-y-[18px]">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Purchase Price: $450,000
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Purchase Price: $450,000
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Purchase Price: $450,000
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Purchase Price: $450,000
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
          />
        </div>
      </div>
      <div className="mt-[28px]">
        <p className="text-2xl font-black text-white leading-[180%]">
          Loan amount: <span className="text-orange-900">$315,000</span>
        </p>
        <p className="text-2xl font-black text-white leading-[180%]">
          Estimated repayment per month:{" "}
          <span className="text-orange-900">$1,300</span>
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
