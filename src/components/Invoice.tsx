import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import MenuBar1 from "./MenuBar1";

export type InvoiceType = {
  className?: string;
  hasMenu?: boolean;
};

const Invoice: FunctionComponent<InvoiceType> = ({
  className = "",
  hasMenu = false,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-spacing-positive-spacing-5 text-left text-base text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <MenuBar1
        property1="OFF"
        rightIcon
        calendar="/component-2.svg"
        calendarIconOverflow="unset"
        dashboard="Invoice"
        component2="/component-2-1.svg"
      />
      {hasMenu && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
          <div className="w-[236px] rounded-spacing-s-8 bg-color-button-button-focus flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-button-button h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                List
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Preview
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Add New
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 bg-color-text-white flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Edit
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice;
