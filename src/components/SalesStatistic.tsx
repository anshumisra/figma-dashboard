import { FunctionComponent } from "react";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

export type SalesStatisticType = {
  className?: string;
};

const SalesStatistic: FunctionComponent<SalesStatisticType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[303px] left-[285px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[708px] overflow-hidden flex flex-col items-start justify-start pt-6 pb-5 pl-6 pr-[9px] box-border gap-7 max-w-full text-left text-lg text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="w-[708px] h-[388px] relative bg-color-text-white hidden max-w-full" />
      <div className="w-[660px] flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full [row-gap:20px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[367px] max-w-full mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch relative leading-[28px] font-semibold z-[1]">
              Sales Statistic
            </div>
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-2 z-[1] text-5xl">
              <div className="relative leading-[32px] font-semibold mq450:text-lgi mq450:leading-[26px]">
                $27,200
              </div>
              <div className="h-6 flex flex-row items-center justify-start gap-1 text-sm text-color-alerts-status-sucess">
                <div className="self-stretch rounded-3xl bg-mediumseagreen-200 border-mediumseagreen-100 border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[7px]">
                  <div className="flex flex-row items-center justify-start gap-0.5">
                    <div className="relative leading-[20px] font-semibold">
                      10%
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/firrcaretup-1.svg"
                    />
                  </div>
                </div>
                <div className="relative leading-[20px] font-medium text-color-text-text-secondary-light inline-block min-w-[113px]">
                  + $1500 Per Day
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormControl
          className="h-8 w-24 font-inter-body-md-body-md-semibold font-medium text-sm text-color-text-text-secondary-light z-[2]"
          variant="standard"
          sx={{
            borderColor: "#d1d5db",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            width: "96px",
            height: "32px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "32px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "32px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "32px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "32px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#4b5563",
              fontSize: 14,
              fontWeight: "Medium",
              fontFamily: "Inter",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "14px",
            },
          }}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="24px"
                height="24px"
                src="/chevrondown-4.svg"
                style={{ marginRight: "8px" }}
              />
            )}
          >
            <MenuItem>Yearly</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-2 max-w-full text-right text-xs text-color-text-text-secondary-light">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[15px] box-border max-w-full">
          <div className="h-[218px] flex-1 relative max-w-full z-[1] mq625:h-auto mq625:min-h-[218]">
            <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start flex-wrap content-start gap-2 max-w-full">
              <div className="relative leading-[18px] inline-block min-w-[37px] shrink-0">
                $100k
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[400px] max-w-full mq625:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/line-5.svg"
                />
              </div>
            </div>
            <div className="absolute top-[50px] left-[0px] w-full flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full">
              <div className="relative leading-[18px] inline-block min-w-[37px] shrink-0">
                $50k
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[398px] max-w-full mq625:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
            </div>
            <div className="absolute top-[100px] left-[0px] w-full flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full">
              <div className="relative leading-[18px] inline-block min-w-[37px] shrink-0">
                $25k
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[398px] max-w-full mq625:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
            </div>
            <div className="absolute top-[150px] left-[0px] w-full flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full">
              <div className="relative leading-[18px] inline-block min-w-[37px] shrink-0">
                $10k
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[398px] max-w-full mq625:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
            </div>
            <div className="absolute top-[200px] left-[0px] w-full flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full">
              <div className="w-[37px] relative leading-[18px] flex items-center shrink-0">
                0
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[398px] max-w-full mq625:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
            </div>
            <div className="absolute top-[32px] left-[48px] w-[611px] h-[179px]">
              <div className="absolute top-[0px] left-[265px] rounded-3xs [background:linear-gradient(180deg,_rgba(72,_127,_255,_0.4),_rgba(72,_127,_255,_0.08))] w-5 h-[179px] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_rgba(72,_127,_255,_0.4),_rgba(72,_127,_255,_0.08))] w-full h-full hidden" />
                <div className="absolute top-[6px] left-[6px] rounded-[50%] bg-color-text-white border-color-button-button border-[0px] border-solid box-border w-3.5 h-3.5 z-[4]" />
              </div>
              <img
                className="absolute top-[9px] left-[0px] w-[611px] h-[166px] z-[3]"
                loading="lazy"
                alt=""
                src="/vector-3017.svg"
              />
            </div>
            <div className="absolute top-[14px] left-[331px] shadow-[0px_12px_20px_rgba(0,_0,_0,_0.1)] rounded-lg bg-color-text-white border-color-text-bg-color border-[1px] border-solid box-border h-[60px] overflow-hidden flex flex-col items-start justify-start py-1.5 px-[11px] gap-1 z-[4] text-left text-sm text-color-text-text-primary-light">
              <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
                Jun 2024
              </div>
              <div className="flex flex-row items-start justify-start gap-0.5 text-color-text-text-secondary-light">
                <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-1">
                  <div className="w-2.5 h-2.5 relative rounded-[50%] bg-color-button-button" />
                </div>
                <div className="relative leading-[20px] font-medium inline-block min-w-[82px]">
                  This Month
                </div>
                <div className="relative leading-[20px] font-medium inline-block min-w-[6px]">
                  :
                </div>
                <div className="relative leading-[20px] font-medium text-color-text-text-primary-light">
                  $3k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[633.5px] flex flex-row items-start justify-start gap-[2.5px] max-w-full text-center mq650:flex-wrap">
          <div className="w-[35px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Jan
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Feb
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Mar
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Apr
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            May
          </div>
          <div className="w-[53px] relative leading-[18px] font-semibold text-color-button-button inline-block shrink-0 z-[1]">
            Jun
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Jul
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Aug
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Sep
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Nov
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Oct
          </div>
          <div className="w-[53px] relative leading-[18px] inline-block shrink-0 z-[1]">
            Dec
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatistic;
