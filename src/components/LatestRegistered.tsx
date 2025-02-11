import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import TableHeader from "./TableHeader";

export type LatestRegisteredType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const LatestRegistered: FunctionComponent<LatestRegisteredType> = ({
  className = "",
  property1 = "Latest Registered",
}) => {
  return (
    <div
      className={`absolute top-[715px] left-[285px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[1104px] h-[471px] overflow-hidden flex flex-col items-start justify-start py-6 pl-6 pr-[18px] box-border gap-4 text-left text-lg text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
      data-property1={property1}
    >
      <div className="w-[1062px] h-12 flex flex-row items-start justify-start gap-[488px] z-[2]">
        <div className="h-12 w-[478px] flex flex-row items-start justify-start z-[2]">
          <div className="h-12 w-[239px] [background:linear-gradient(180deg,_rgba(72,_127,_255,_0.12),_rgba(72,_127,_255,_0.03))] border-color-button-button border-t-[1px] border-solid box-border flex flex-col items-start justify-start py-2.5 px-4">
            <div className="w-[207px] h-7 flex flex-row items-center justify-start gap-[11px]">
              <div className="h-7 w-[155px] relative leading-[28px] font-semibold inline-block shrink-0">{`Latest Registered `}</div>
              <div className="h-6 w-[42px] rounded-spacing-positive-spacing-6 bg-color-button-button flex flex-col items-center justify-center py-0.5 px-3 box-border text-sm text-color-text-white">
                <div className="w-[19px] h-5 relative leading-[20px] font-semibold inline-block shrink-0">
                  35
                </div>
              </div>
            </div>
          </div>
          <div className="h-12 w-[239px] border-color-input-from-input-from-light border-t-[1px] border-solid box-border flex flex-col items-start justify-start py-2.5 px-4 text-color-text-text-secondary-light">
            <div className="w-[207px] h-7 flex flex-row items-center justify-start gap-[11px]">
              <div className="h-7 w-[154px] relative leading-[28px] font-semibold inline-block shrink-0">{`Latest Subscribe `}</div>
              <div className="h-6 w-[43px] rounded-spacing-positive-spacing-6 bg-color-text-text-secondary-light flex flex-col items-center justify-center py-0.5 px-3 box-border text-sm text-color-text-white">
                <div className="w-5 h-5 relative leading-[20px] font-semibold inline-block shrink-0">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-7 w-24 rounded-spacing-positive-spacing-3 bg-color-text-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-0.5 pl-4 pr-0 box-border gap-1 z-[1] text-base text-color-button-button">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconarrowsoutlinearrowupcircle.svg"
          />
          <a className="[text-decoration:none] h-6 w-[61px] relative leading-[24px] text-[inherit] inline-block shrink-0">
            View All
          </a>
          <div className="h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/chevrondown-5.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1056px] h-[359px] rounded-lg bg-color-text-white border-color-neutral-neutral-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1] text-base">
        <div className="h-[360px] w-[1056px] flex flex-row items-start justify-start">
          <div className="h-[360px] w-[643px] flex flex-col items-end justify-start">
            <div className="w-[643px] h-[360px] flex flex-row items-start justify-end py-0 pl-0 pr-[308.5px] box-border z-[1]">
              <div className="h-[360px] w-[334.5px] flex flex-col items-start justify-center">
                <div className="w-[334.5px] h-[50px] bg-color-text-bg-color border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[13px] pl-4 pr-[273.5px]">
                  <TableHeader
                    arrow={false}
                    helpIcon={false}
                    state="Default"
                    tableHeader="Users"
                  />
                </div>
                <div className="w-[334.5px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-4 pr-[136.5px] gap-2">
                  <img
                    className="h-10 w-10 rounded-181xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/avatar-6@2x.png"
                  />
                  <div className="h-11 w-[134px] flex flex-col items-start justify-start">
                    <div className="w-[111px] h-6 relative leading-[24px] inline-block shrink-0">
                      Dianne Russell
                    </div>
                    <div className="w-[135px] h-5 relative text-sm leading-[20px] text-color-text-text-secondary-light inline-block shrink-0">
                      redaniel@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-[334.5px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-4 pr-[147.5px] gap-2">
                  <img
                    className="h-10 w-10 rounded-181xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/avatar-7@2x.png"
                  />
                  <div className="h-11 w-[123px] flex flex-col items-start justify-start">
                    <div className="w-[102px] h-6 relative leading-[24px] inline-block shrink-0">
                      Wade Warren
                    </div>
                    <div className="w-[124px] h-5 relative text-sm leading-[20px] text-color-text-text-secondary-light inline-block shrink-0">
                      xterris@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-[334.5px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-4 pr-[148.5px] gap-2">
                  <img
                    className="h-10 w-10 rounded-181xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/avatar-8@2x.png"
                  />
                  <div className="h-11 w-[122px] flex flex-col items-start justify-start">
                    <div className="w-[98px] h-6 relative leading-[24px] inline-block shrink-0">
                      Albert Flores
                    </div>
                    <div className="w-[123px] h-5 relative text-sm leading-[20px] text-color-text-text-secondary-light inline-block shrink-0">
                      seannand@mail.ru
                    </div>
                  </div>
                </div>
                <div className="w-[334.5px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-4 pr-[147.5px] gap-2">
                  <img
                    className="h-10 w-10 rounded-181xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/avatar-2@2x.png"
                  />
                  <div className="h-11 w-[123px] flex flex-col items-start justify-start">
                    <div className="w-[111px] h-6 relative leading-[24px] inline-block shrink-0">
                      Bessie Cooper
                    </div>
                    <div className="w-[124px] h-5 relative text-sm leading-[20px] text-color-text-text-secondary-light inline-block shrink-0">
                      igerrin@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-[334.5px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[9px] pl-4 pr-[164.5px] gap-2">
                  <img
                    className="h-10 w-10 rounded-181xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/avatar-10@2x.png"
                  />
                  <div className="h-11 w-[106px] flex flex-col items-start justify-start">
                    <div className="w-[107px] h-6 relative leading-[24px] inline-block shrink-0">
                      Arlene McCoy
                    </div>
                    <div className="w-[99px] h-5 relative text-sm leading-[20px] text-color-text-text-secondary-light inline-block shrink-0">
                      fellora@mail.ru
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[309px] h-[360px] flex flex-col items-center justify-center z-[2] mt-[-360px] text-color-text-text-secondary-light">
              <div className="w-[309px] h-[50px] bg-color-text-bg-color border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[13px] pl-4 pr-[184px]">
                <TableHeader
                  arrow={false}
                  helpIcon={false}
                  state="Default"
                  tableHeader="Registered On"
                  tableHeaderHeight="24px"
                  tableHeaderDisplay="inline-block"
                />
              </div>
              <div className="w-[309px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[196px]">
                <div className="h-6 w-[98px] relative leading-[24px] inline-block shrink-0">
                  27 Mar 2024
                </div>
              </div>
              <div className="w-[309px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[196px]">
                <div className="h-6 w-[98px] relative leading-[24px] inline-block shrink-0">
                  27 Mar 2024
                </div>
              </div>
              <div className="w-[309px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[196px]">
                <div className="h-6 w-[98px] relative leading-[24px] inline-block shrink-0">
                  27 Mar 2024
                </div>
              </div>
              <div className="w-[309px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[196px]">
                <div className="h-6 w-[98px] relative leading-[24px] inline-block shrink-0">
                  27 Mar 2024
                </div>
              </div>
              <div className="w-[309px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[196px]">
                <div className="h-6 w-[98px] relative leading-[24px] inline-block shrink-0">
                  27 Mar 2024
                </div>
              </div>
            </div>
          </div>
          <div className="h-[360px] w-[413px] flex flex-row items-start justify-start text-color-text-text-secondary-light">
            <div className="h-[360px] w-[231px] flex flex-col items-center justify-center">
              <div className="w-[231px] h-[50px] bg-color-text-bg-color border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[13px] pl-4 pr-[182px]">
                <TableHeader
                  arrow={false}
                  helpIcon={false}
                  state="Default"
                  tableHeader="Plan"
                  tableHeaderHeight="unset"
                  tableHeaderDisplay="unset"
                />
              </div>
              <div className="w-[231px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[181px]">
                <div className="h-6 w-[35px] relative leading-[24px] inline-block shrink-0">
                  Free
                </div>
              </div>
              <div className="w-[231px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[174px]">
                <div className="h-6 w-[42px] relative leading-[24px] inline-block shrink-0">
                  Basic
                </div>
              </div>
              <div className="w-[231px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[146px]">
                <div className="h-6 w-[70px] relative leading-[24px] inline-block shrink-0">{`Standard `}</div>
              </div>
              <div className="w-[231px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[147px]">
                <div className="h-6 w-[69px] relative leading-[24px] inline-block shrink-0">{`Business `}</div>
              </div>
              <div className="w-[231px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[19px] pl-4 pr-[137px]">
                <div className="h-6 w-[79px] relative leading-[24px] inline-block shrink-0">{`Enterprise `}</div>
              </div>
            </div>
            <div className="h-[360px] w-[182px] flex flex-col items-center justify-center text-center text-sm text-color-alerts-status-sucess">
              <div className="w-[182px] h-[50px] bg-color-text-bg-color border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[13px] pl-4 pr-[116px]">
                <TableHeader
                  arrow={false}
                  helpIcon={false}
                  state="Default"
                  tableHeader="Status"
                  tableHeaderHeight="unset"
                  tableHeaderDisplay="unset"
                />
              </div>
              <div className="w-[182px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[17px] pl-4 pr-[91px]">
                <div className="h-7 w-[75px] rounded-2xl bg-mediumseagreen-300 flex flex-row items-center justify-start py-1 px-4 box-border">
                  <div className="h-5 w-11 relative leading-[20px] font-medium inline-block shrink-0">
                    Active
                  </div>
                </div>
              </div>
              <div className="w-[182px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[17px] pl-4 pr-[91px]">
                <div className="h-7 w-[75px] rounded-2xl bg-mediumseagreen-300 flex flex-row items-center justify-start py-1 px-4 box-border">
                  <div className="h-5 w-11 relative leading-[20px] font-medium inline-block shrink-0">
                    Active
                  </div>
                </div>
              </div>
              <div className="w-[182px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[17px] pl-4 pr-[91px]">
                <div className="h-7 w-[75px] rounded-2xl bg-mediumseagreen-300 flex flex-row items-center justify-start py-1 px-4 box-border">
                  <div className="h-5 w-11 relative leading-[20px] font-medium inline-block shrink-0">
                    Active
                  </div>
                </div>
              </div>
              <div className="w-[182px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[17px] pl-4 pr-[91px]">
                <div className="h-7 w-[75px] rounded-2xl bg-mediumseagreen-300 flex flex-row items-center justify-start py-1 px-4 box-border">
                  <div className="h-5 w-11 relative leading-[20px] font-medium inline-block shrink-0">
                    Active
                  </div>
                </div>
              </div>
              <div className="w-[182px] h-[62px] border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[17px] pl-4 pr-[91px]">
                <div className="h-7 w-[75px] rounded-2xl bg-mediumseagreen-300 flex flex-row items-center justify-start py-1 px-4 box-border">
                  <div className="h-5 w-11 relative leading-[20px] font-medium inline-block shrink-0">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRegistered;
