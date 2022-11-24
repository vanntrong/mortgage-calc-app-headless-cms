import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"img"> {
  variant?: "black" | "white";
}

const Avatar = ({ variant = "white", title, src, ...rest }: Props) => {
  return (
    <div
      className={`w-[53px] h-[53px] rounded-full flex items-center justify-center ${
        variant === "white" ? "bg-orange-900" : "bg-[#16222D]"
      }`}
    >
      <img src={src} {...rest} />
      {!src && (
        <span className="font-extrabold text-white text-[25px]">{title}</span>
      )}
    </div>
  );
};

export default Avatar;
