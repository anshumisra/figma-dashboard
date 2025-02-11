import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Button from "./Button";

export type Dashboard1Type = {
  className?: string;
  subItem5?: string;
  subItem4?: string;
  subItem3?: string;
  subItem2?: string;
  subItem1?: string;
  hideSubs?: boolean;
};

const Dashboard1: FunctionComponent<Dashboard1Type> = ({
  className = "",
  subItem5 = "CRM",
  subItem4 = "Investment",
  subItem3 = "Cryptocracy ",
  subItem2 = "eCommerce",
  subItem1 = "AI ",
  hideSubs = true,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-spacing-positive-spacing-5 text-left text-base text-color-text-white font-inter-body-md-body-md-semibold ${className}`}
    >
      <Button
        hierarchy="Defualt"
        size="MD"
        text="Dashboard"
        rightIcon
        homeDash="/homedash.svg"
        angleDown="/angledown.svg"
      />
      {hideSubs && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3 text-sm text-color-text-text-secondary-light">
          <div className="w-[236px] rounded-spacing-s-8 bg-color-button-button-focus flex flex-row items-center justify-start py-[7px] px-3 box-border text-color-text-text-primary-light">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="h-2 w-2 relative rounded-[50%] bg-color-button-button" />
              <div className="flex-1 relative leading-[24px] font-medium">
                {subItem1}
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="flex-1 relative leading-[24px] font-medium">
                {subItem5}
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-info h-2" />
              <div className="flex-1 relative leading-[24px] font-medium">
                {subItem2}
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="flex-1 relative leading-[24px] font-medium">
                {subItem3}
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="flex-1 relative leading-[24px] font-medium">
                {subItem4}
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-secoundary-color h-2" />
              <div className="w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                LMS / Learning System
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="w-[194px] relative leading-[24px] font-medium inline-block shrink-0">{`NFT & Gaming`}</div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-info h-2" />
              <div className="w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Medical
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-blueviolet h-2" />
              <div className="w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Analytics
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="w-[194px] relative leading-[24px] font-medium inline-block shrink-0">{`POS & Inventory`}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard1;
