import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Invoice1Type = {
  className?: string;
  hasMenu?: boolean;
};

const Invoice1: FunctionComponent<Invoice1Type> = ({
  className = "",
  hasMenu = false,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-spacing-positive-spacing-5 text-left text-base text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="w-[280px] rounded-spacing-s-8 bg-color-text-white overflow-hidden flex flex-col items-start justify-start py-2.5 pl-3 pr-[7px] box-border">
        <div className="w-[257px] flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-start justify-start gap-3">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/component.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Ai Application
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/component-2-2.svg"
          />
        </div>
      </div>
      {hasMenu && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
          <div className="w-[236px] rounded-spacing-s-8 bg-color-button-button-focus flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-button-button h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Text Generator
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-secoundary-color h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Code Generator
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Image Generator
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Voice Generator
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Video Generator
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice1;
