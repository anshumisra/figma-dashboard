import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type TotalSubscriberType = {
  className?: string;
};

const TotalSubscriber: FunctionComponent<TotalSubscriberType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[303px] left-[1017px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[372px] overflow-hidden flex flex-col items-start justify-start pt-6 pb-5 pl-6 pr-[23px] box-border gap-[16.5px] max-w-full text-left text-lg text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="self-stretch relative leading-[28px] font-semibold">
        Total Subscriber
      </div>
      <div className="flex flex-row items-center justify-start gap-2 text-5xl">
        <div className="relative leading-[32px] font-semibold inline-block min-w-[71px] mq450:text-lgi mq450:leading-[26px]">
          5,000
        </div>
        <div className="h-6 flex flex-row items-center justify-start gap-1 text-sm text-color-alerts-status-error">
          <div className="self-stretch rounded-3xl bg-tomato-200 border-tomato-100 border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[7px]">
            <div className="flex flex-row items-center justify-start gap-0.5">
              <div className="relative leading-[20px] font-semibold">10%</div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/firrcaretup.svg"
              />
            </div>
          </div>
          <div className="relative leading-[20px] font-medium text-color-text-text-secondary-light inline-block min-w-[85px]">
            - 20 Per Day
          </div>
        </div>
      </div>
      <div className="rounded-spacing-positive-spacing-3 bg-color-text-white border-color-input-from-input-from-light border-[1px] border-solid overflow-hidden hidden flex-row items-center justify-center py-0.5 pl-[13px] pr-[7px] gap-2 text-sm text-color-text-text-secondary-light">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconarrowsoutlinearrowupcircle.svg"
        />
        <div className="relative leading-[20px] font-medium">Weekly</div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/chevrondown-2.svg"
        />
      </div>
      <div className="self-stretch h-[251px] flex flex-col items-start justify-start gap-0.5 max-w-full text-center text-base text-secondary-800">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[152px] pr-[151px]">
          <div className="flex-1 relative leading-[24px] font-semibold">20</div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2 max-w-full text-xs text-color-text-text-secondary-light">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-end justify-between max-w-full gap-5">
              <div className="h-[148px] w-[26px] relative rounded-lg bg-royalblue" />
              <div className="h-[120px] w-[26px] relative rounded-lg bg-royalblue" />
              <div className="h-[182px] w-[26px] relative rounded-lg bg-royalblue" />
              <div className="self-stretch w-[26px] relative rounded-lg [background:linear-gradient(180deg,_#487fff,_rgba(72,_127,_255,_0.31))]" />
              <div className="h-[131px] w-[26px] relative rounded-lg bg-royalblue" />
              <div className="h-[168px] w-[26px] relative rounded-lg bg-royalblue" />
              <div className="h-[54px] w-[26px] relative rounded-lg bg-royalblue" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="relative leading-[18px] inline-block min-w-[29px]">
              Sun
            </div>
            <div className="relative leading-[18px] inline-block min-w-[29px]">
              Mon
            </div>
            <div className="relative leading-[18px] inline-block min-w-[29px]">
              Tue
            </div>
            <div className="relative leading-[18px] font-semibold text-color-button-button inline-block min-w-[29px]">
              Wed
            </div>
            <div className="relative leading-[18px] inline-block min-w-[29px]">
              Thu
            </div>
            <div className="w-[29px] relative leading-[18px] inline-block shrink-0">
              Fri
            </div>
            <div className="w-[29px] relative leading-[18px] inline-block shrink-0">
              Sat
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSubscriber;
