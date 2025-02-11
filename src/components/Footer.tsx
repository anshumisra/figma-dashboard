import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute right-[0px] bottom-[0px] bg-color-text-white w-[1608px] h-16 overflow-hidden flex flex-row items-start justify-start py-[22px] px-6 box-border gap-[1093px] text-left text-sm text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="h-5 w-[301px] relative leading-[20px] inline-block shrink-0">
        © 2024 Company Name. All Rights Reserved.
      </div>
      <div className="h-5 w-[168px] relative leading-[20px] text-right inline-block shrink-0">
        <span>{`Made by `}</span>
        <span className="text-color-button-button">Company Name</span>
      </div>
    </div>
  );
};

export default Footer;
