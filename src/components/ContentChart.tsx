import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type ContentChartType = {
  className?: string;
};

const ContentChart: FunctionComponent<ContentChartType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[684px] h-[243px] flex flex-row items-start justify-start relative text-right text-xs text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="h-[234px] w-[720px] !m-[0] absolute top-[-11px] left-[-44px] flex flex-col items-start justify-start gap-9 z-[0]">
        <div className="w-[720px] h-[18px] flex flex-row items-start justify-start gap-4">
          <div className="h-[18px] w-[43px] relative leading-[18px] flex items-center shrink-0">
            50,000
          </div>
          <div className="h-2.5 w-[662px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img className="w-[662px] relative h-px" alt="" src="/line.svg" />
          </div>
        </div>
        <div className="w-[720px] h-[18px] flex flex-row items-start justify-start gap-4">
          <div className="h-[18px] w-[43px] relative leading-[18px] flex items-center shrink-0">
            30,000
          </div>
          <div className="h-2.5 w-[662px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img className="w-[662px] h-px relative" alt="" src="/line.svg" />
          </div>
        </div>
        <div className="w-[720px] h-[18px] flex flex-row items-start justify-start gap-4">
          <div className="h-[18px] w-[43px] relative leading-[18px] flex items-center shrink-0">
            20,000
          </div>
          <div className="h-2.5 w-[662px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img className="w-[662px] h-px relative" alt="" src="/line.svg" />
          </div>
        </div>
        <div className="w-[720px] h-[18px] flex flex-row items-start justify-start gap-4">
          <div className="h-[18px] w-[43px] relative leading-[18px] flex items-center shrink-0">
            10,000
          </div>
          <div className="h-2.5 w-[662px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img className="w-[662px] h-px relative" alt="" src="/line.svg" />
          </div>
        </div>
        <div className="w-[720px] h-[18px] flex flex-row items-start justify-start gap-4">
          <div className="h-[18px] w-[43px] relative leading-[18px] flex items-center shrink-0">
            0
          </div>
          <div className="h-2.5 w-[662px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img className="w-[662px] h-px relative" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <div className="h-[243px] w-[684px] flex flex-row items-start justify-start gap-[5px] z-[1] text-center">
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.7px] box-border gap-[9px]">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-24 px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-[120px]" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[90px]" />
          </div>
          <div className="w-[22px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Jan
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.7px] box-border gap-[9px]">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-[118px] px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-[91px]" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[98px]" />
          </div>
          <div className="w-[22px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Feb
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.2px] box-border gap-[9px]">
          <div className="w-[21px] h-[216px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[107px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[69px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[109px]" />
            </div>
          </div>
          <div className="w-[23px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Mar
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[16.2px] box-border gap-[9px]">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-[72px] px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-36" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[109px]" />
          </div>
          <div className="w-[21px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Apr
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[14.2px] box-border gap-[9px]">
          <div className="w-[22px] h-[216px] flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[17px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[199px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[151px]" />
            </div>
          </div>
          <div className="w-[25px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            May
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.7px] box-border gap-[9px] text-color-text-text-primary-light">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-[105px] px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-[98px]" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[111px]" />
          </div>
          <div className="w-[22px] h-[18px] relative leading-[18px] font-medium flex items-center justify-center shrink-0">
            Jun
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[16.2px] box-border gap-[9px]">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-[67px] px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-[149px]" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[100px]" />
          </div>
          <div className="w-[18.5px] h-[18px] flex flex-row items-start justify-start py-0 pl-[1.5px] pr-0 box-border">
            <div className="h-[18px] w-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
              Jul
            </div>
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[14.7px] box-border gap-[9px]">
          <div className="w-[21.5px] h-[216px] flex flex-row items-start justify-start py-0 pl-[1.5px] pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[139px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[62px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[77px]" />
            </div>
          </div>
          <div className="w-6 h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Aug
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.2px] box-border gap-[9px]">
          <div className="w-[21px] h-[216px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[73px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[143px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[99px]" />
            </div>
          </div>
          <div className="w-[23px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Sep
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[15.7px] box-border gap-[9px]">
          <div className="w-5 h-[216px] flex flex-row items-end justify-start pt-4 px-0 pb-0 box-border gap-1">
            <div className="w-2 relative rounded-3xs bg-color-button-button h-[200px]" />
            <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-28" />
          </div>
          <div className="w-[22px] h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Oct
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[14.7px] box-border gap-[9px]">
          <div className="w-[21.5px] h-[216px] flex flex-row items-start justify-start py-0 pl-[1.5px] pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[117px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[99px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[72px]" />
            </div>
          </div>
          <div className="w-6 h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Nov
          </div>
        </div>
        <div className="h-[243px] w-[52.4px] flex flex-col items-start justify-start py-0 px-[14.7px] box-border gap-[9px]">
          <div className="w-[21.5px] h-[216px] flex flex-row items-start justify-start py-0 pl-[1.5px] pr-0 box-border">
            <div className="h-[216px] w-5 flex flex-row items-end justify-start pt-[100px] px-0 pb-0 box-border gap-1">
              <div className="w-2 relative rounded-3xs bg-color-button-button h-[116px]" />
              <div className="w-2 relative rounded-3xs bg-color-alerts-status-warning h-[89px]" />
            </div>
          </div>
          <div className="w-6 h-[18px] relative leading-[18px] flex items-center justify-center shrink-0">
            Dec
          </div>
        </div>
      </div>
      <div className="h-[84px] w-[131px] absolute !m-[0] top-[63px] right-[233px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] z-[2] text-left text-sm">
        <div className="absolute top-[0px] left-[14px] shadow-[0px_12px_20px_rgba(0,_0,_0,_0.1)] rounded-lg bg-color-text-white border-color-text-bg-color border-[1px] border-solid box-border w-[117px] h-[84px] flex flex-col items-start justify-start py-2 px-3 gap-1">
          <div className="w-[65px] h-5 flex flex-row items-start justify-start text-color-text-text-primary-light">
            <div className="h-5 w-[66px] relative leading-[20px] font-medium inline-block shrink-0">
              Jun 2024
            </div>
          </div>
          <div className="w-[89px] h-5 flex flex-row items-start justify-start gap-1.5">
            <div className="h-[15px] w-2.5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="w-2.5 relative rounded-[50%] bg-color-button-button h-2.5" />
            </div>
            <div className="h-5 w-[73px] flex flex-row items-start justify-start gap-0.5">
              <div className="h-5 w-[37px] relative leading-[20px] font-medium inline-block shrink-0">
                Word
              </div>
              <div className="h-5 w-1.5 relative leading-[20px] font-medium inline-block shrink-0">
                :
              </div>
              <div className="h-5 w-[29px] relative leading-[20px] font-medium text-color-text-text-primary-light inline-block shrink-0">
                300
              </div>
            </div>
          </div>
          <div className="w-[93px] h-5 flex flex-row items-start justify-start gap-1.5">
            <div className="h-[15px] w-2.5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="w-2.5 relative rounded-[50%] bg-color-alerts-status-warning h-2.5" />
            </div>
            <div className="h-5 w-[77px] flex flex-row items-start justify-start gap-0.5">
              <div className="h-5 w-[42px] relative leading-[20px] font-medium inline-block shrink-0">
                Image
              </div>
              <div className="h-5 w-1.5 relative leading-[20px] font-medium inline-block shrink-0">
                :
              </div>
              <div className="h-5 w-7 relative leading-[20px] font-medium text-color-text-text-primary-light inline-block shrink-0">
                500
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[25px] left-[0px] rounded-sm w-[27px] h-[34px] object-contain"
          loading="lazy"
          alt=""
          src="/polygon-1.svg"
        />
      </div>
    </div>
  );
};

export default ContentChart;
