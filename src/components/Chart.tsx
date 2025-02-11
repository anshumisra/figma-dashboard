import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import MenuBar1 from "./MenuBar1";

export type ChartType = {
  className?: string;
  subMenu?: boolean;
};

const Chart: FunctionComponent<ChartType> = ({
  className = "",
  subMenu = false,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-spacing-positive-spacing-5 text-left text-sm text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <MenuBar1
        property1="OFF"
        rightIcon
        calendar="/component-2-12.svg"
        calendarIconOverflow="unset"
        dashboard="Chart"
        component2="/component-2-7.svg"
      />
      {subMenu && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Line Chart
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Column Chart
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Pie Chart
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chart;
