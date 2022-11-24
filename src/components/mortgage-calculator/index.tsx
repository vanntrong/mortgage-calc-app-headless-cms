import React, { useEffect, useState } from "react";
import { numberToUSD } from "../../utils/number";

const MAX_PURCHASE_PRICE = 1000000;
const MAX_REPAYMENT_TIME = 50;
const MAX_INTEREST_RATE = 10;

const calculateMonthlyPayment = (
  interestRate: number,
  repaymentTime: number,
  loanAmount: number
) => {
  const r = interestRate / 100 / 12;
  const n = repaymentTime * 12;
  const _monthlyPayment =
    (loanAmount * (r * (1 + r) ** n)) / ((1 + r) ** n - 1);
  return _monthlyPayment;
};

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(135000);
  const [interestRate, setInterestRate] = useState(3);
  const [repaymentTime, setRepaymentTime] = useState(25);
  const [loanAmount, setLoanAmount] = useState(purchasePrice - downPayment);
  const [monthlyPayment, setMonthlyPayment] = useState(
    calculateMonthlyPayment(interestRate, repaymentTime, loanAmount)
  );

  useEffect(() => {
    setLoanAmount(purchasePrice - downPayment);
  }, [purchasePrice, downPayment]);

  useEffect(() => {
    setMonthlyPayment(
      calculateMonthlyPayment(interestRate, repaymentTime, loanAmount)
    );
  }, [interestRate, repaymentTime, loanAmount]);

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
            Purchase Price: {numberToUSD(purchasePrice)}
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
            value={purchasePrice}
            min={0}
            max={MAX_PURCHASE_PRICE}
            onChange={(e) => setPurchasePrice(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor=""
            className="font-black text-[18px] text-white whitespace-nowrap"
          >
            Down Payment: {numberToUSD(downPayment)}
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
            value={downPayment}
            min={0}
            max={purchasePrice}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Repayment time: {repaymentTime}{" "}
            {repaymentTime > 1 ? "years" : "year"}
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
            value={repaymentTime}
            min={1}
            max={MAX_REPAYMENT_TIME}
            step={1}
            onChange={(e) => setRepaymentTime(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="" className="font-black text-[18px] text-white">
            Interest Rate: {interestRate}%
          </label>

          <input
            className="mortgage-calculator__input rounded-[20px] overflow-hidden appearance-none bg-white h-[14px] w-full"
            type="range"
            value={interestRate}
            min={0}
            max={MAX_INTEREST_RATE}
            step={0.1}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-[28px]">
        <p className="text-2xl font-black text-white leading-[180%]">
          Loan amount:{" "}
          <span className="text-orange-900">{numberToUSD(loanAmount)}</span>
        </p>
        <p className="text-2xl font-black text-white leading-[180%]">
          Estimated repayment per month:{" "}
          <span className="text-orange-900">{numberToUSD(monthlyPayment)}</span>
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
