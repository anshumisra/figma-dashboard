import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type LayoutsType = {
  className?: string;
  menu?: boolean;
};

const Layouts: FunctionComponent<LayoutsType> = ({
  className = "",
  menu = false,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-spacing-positive-spacing-5 text-left text-base text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="w-[280px] rounded-spacing-positive-spacing-4 bg-color-text-white h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 box-border">
        <div className="flex-1 flex flex-row items-center justify-start gap-2">
          <div className="flex-1 flex flex-row items-center justify-start gap-3">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/circumbitcoin.svg"
            />
            <div className="w-[123px] relative leading-[24px] font-medium whitespace-pre-wrap inline-block">{`CryptoCurrency  `}</div>
          </div>
          <img className="h-5 w-5 relative" alt="" src="/angledown-1.svg" />
        </div>
      </div>
      {menu && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
          <div className="w-[236px] rounded-spacing-s-8 bg-color-button-button-focus flex flex-row items-center justify-start py-2 px-3 box-border text-color-text-text-primary-light">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-button-button h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Wallet
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">{`Marketplace `}</div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-2 px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Portfolios
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layouts;
