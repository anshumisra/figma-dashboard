import { FunctionComponent } from "react";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";
import GeneratedContent from "../components/GeneratedContent";
import TotalSubscriber from "../components/TotalSubscriber";
import SalesStatistic from "../components/SalesStatistic";
import TableCell1 from "../components/TableCell1";
import LatestRegistered from "../components/LatestRegistered";
import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";
import Header from "../components/Header";

export type DashboardType = {
  onClose?: () => void;
};

const Dashboard: FunctionComponent<DashboardType> = ({ onClose }) => {
  return (
    <div className="w-full h-[1687px] relative bg-color-text-bg-color overflow-hidden leading-[normal] tracking-[normal] text-left text-lg text-color-text-text-primary-light font-inter-body-md-body-md-semibold mq450:h-auto mq450:min-h-[1687]">
      <Footer />
      <div className="absolute top-[1210px] left-[285px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[768px] overflow-hidden flex flex-row items-end justify-start p-6 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
          <div className="self-stretch relative leading-[28px] font-semibold">
            Top Countries
          </div>
          <div className="w-[361px] shadow-[0px_4px_60px_rgba(4,_6,_15,_0.05)] rounded-lg bg-color-text-white border-color-neutral-neutral-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[242px] px-3 pb-2.5 relative max-w-full">
            <img
              className="h-[246px] w-[575px] absolute !m-[0] right-[-149px] bottom-[13px] overflow-hidden shrink-0"
              alt=""
              src="/world.svg"
            />
            <div className="flex flex-row items-start justify-start gap-2 z-[1]">
              <div className="rounded-lg bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-center justify-center p-1.5">
                <div className="flex flex-row items-center justify-center p-0.5">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/fisrzoomin.svg"
                  />
                </div>
              </div>
              <div className="rounded-lg bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-center justify-center p-1.5">
                <div className="flex flex-row items-center justify-center p-0.5">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/fisrzoomout.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[343px] flex flex-col items-end justify-start gap-4 max-w-full ml-[-247px] text-sm">
          <FormControl
            className="w-24 h-8 font-inter-body-md-body-md-semibold font-medium text-sm text-color-text-text-secondary-light"
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
                  src="/chevrondown.svg"
                  style={{ marginRight: "8px" }}
                />
              )}
            >
              <MenuItem>Yearly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="self-stretch h-72 shadow-[0px_4px_60px_rgba(4,_6,_15,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white border-color-neutral-neutral-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pl-3.5 pr-0 gap-3.5 mq450:h-auto">
            <div className="self-stretch flex flex-row items-end justify-start gap-3 shrink-0 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border min-w-[127px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-10 w-10 relative rounded-81xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/img@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        USA
                      </div>
                      <div className="self-stretch relative text-xs leading-[18px] font-medium text-color-text-text-secondary-light">
                        1,240 Users
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-10 w-10 relative rounded-81xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/img-1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        Japan
                      </div>
                      <div className="self-stretch relative text-xs leading-[18px] font-medium text-color-text-text-secondary-light">
                        1,240 Users
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-10 w-10 relative rounded-81xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/img-2@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        France
                      </div>
                      <div className="self-stretch relative text-xs leading-[18px] font-medium text-color-text-text-secondary-light">
                        1,240 Users
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-10 w-10 relative rounded-81xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/img-3@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        Germany
                      </div>
                      <div className="self-stretch relative text-xs leading-[18px] font-medium text-color-text-text-secondary-light">
                        1,240 Users
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-10 w-10 relative rounded-81xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/img-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        South Korea
                      </div>
                      <div className="self-stretch relative text-xs leading-[18px] font-medium text-color-text-text-secondary-light">
                        1,240 Users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[292px] flex flex-row items-end justify-start gap-4 min-w-[120px] text-center text-xs text-color-text-text-secondary-light mq450:flex-1">
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[15px]">
                  <div className="self-stretch flex flex-row items-end justify-start gap-0.5">
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[49.8px]">
                        <div className="self-stretch h-2 rounded-81xl bg-neutral-gray-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
                          <div className="h-full w-[54px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-color-button-button" />
                        </div>
                        <div className="self-stretch h-2 rounded-81xl bg-neutral-gray-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
                          <div className="h-full w-[45px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-color-alerts-status-error" />
                        </div>
                        <div className="self-stretch rounded-81xl bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 w-9 relative rounded-3xs bg-color-alerts-status-warning" />
                        </div>
                        <div className="w-[60px] rounded-81xl bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 flex-1 relative rounded-3xs bg-color-alerts-status-sucess shrink-0" />
                        </div>
                        <div className="self-stretch rounded-81xl bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2.5 w-[13px] relative rounded-3xs bg-mediumblue" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-10">
                      <div className="w-[27px] relative leading-[18px] font-semibold flex items-center justify-center">
                        80%
                      </div>
                      <div className="w-[27px] relative leading-[18px] font-semibold flex items-center justify-center">
                        60%
                      </div>
                      <div className="w-[27px] relative leading-[18px] font-semibold flex items-center justify-center">
                        49%
                      </div>
                      <div className="w-[33px] relative leading-[18px] font-semibold flex items-center justify-center">
                        100%
                      </div>
                      <div className="w-[27px] relative leading-[18px] font-semibold flex items-center justify-center">
                        50%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-1 bg-color-text-bg-color overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[136px] box-border">
                  <div className="self-stretch w-1 relative bg-color-input-from-input-from-light" />
                </div>
              </div>
            </div>
            <div className="w-[312px] flex flex-row items-start justify-start gap-3 shrink-0 text-neutral-black-black-500 font-text-s-semibold">
              <div className="h-10 w-10 relative rounded-81xl bg-neutral-gray-gray-100" />
              <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                  China
                </div>
                <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                  1,240 Customers
                </div>
              </div>
              <div className="w-[100px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-center text-xs text-neutral-gray-gray-400">
                <div className="self-stretch flex flex-row items-start justify-start gap-2">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="self-stretch rounded-81xl bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-start justify-start">
                      <div className="h-2 w-[17px] relative rounded-3xs bg-secondary-red-red-500" />
                    </div>
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold inline-block min-w-[28px]">
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeneratedContent property1="Yearly" />
      <TotalSubscriber />
      <div className="absolute top-[303px] left-[1413px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[432px] overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-5 box-border gap-[39px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 [row-gap:20px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[188px]">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Users Overview
              </div>
            </div>
            <FormControl
              className="h-8 w-[95px] font-inter-body-md-body-md-semibold font-medium text-sm text-color-text-text-secondary-light"
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
                width: "95px",
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
                    src="/chevrondown-3.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Today</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-[214px] w-[214px] relative"
              loading="lazy"
              alt=""
              src="/circle-chart.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-color-text-text-secondary-light mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="w-4 h-4 relative rounded-spacing-positive-spacing-2 bg-color-button-button" />
            </div>
            <div className="relative leading-[28px] inline-block min-w-[84px]">
              <span>New:</span>
              <span className="text-color-text-text-primary-light"> 500</span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="w-4 h-4 relative rounded-spacing-positive-spacing-2 bg-color-alerts-status-warning" />
            </div>
            <div className="relative leading-[28px]">
              <span>Subscribed:</span>
              <span className="text-color-text-text-primary-light"> 300</span>
            </div>
          </div>
        </div>
      </div>
      <SalesStatistic />
      <div className="absolute top-[715px] left-[1413px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[432px] overflow-hidden flex flex-col items-start justify-start pt-6 pb-[15px] pl-6 pr-[18px] box-border gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="relative leading-[28px] font-semibold">
            Latest Transactions
          </div>
          <div className="rounded-spacing-positive-spacing-3 bg-color-text-white overflow-hidden flex flex-row items-start justify-start py-0.5 pl-4 pr-0 gap-1 text-base text-color-button-button">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconarrowsoutlinearrowupcircle.svg"
            />
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              View All
            </a>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevrondown-5.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-1.5 [row-gap:20px] text-base mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-center min-w-[161px]">
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[89px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] inline-block min-w-[111px]">
                  Dianne Russell
                </div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[98px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Wade Warren</div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[102px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Albert Flores</div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[89px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar-3@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Bessie Cooper</div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[93px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar-4@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Arlene McCoy</div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-2.5 pl-0 pr-[93px] gap-2">
              <img
                className="h-10 w-10 rounded-181xl object-cover"
                loading="lazy"
                alt=""
                src="/avatar-5@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Arlene McCoy</div>
                <div className="relative text-sm leading-[20px] text-color-text-text-secondary-light">
                  03 Sep 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center min-w-[137px] mq450:flex-1">
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$20"
            />
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$10"
            />
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$30 "
            />
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$40"
            />
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$10 "
            />
            <TableCell1
              state="Default"
              style="Text"
              supportingText={false}
              transactionValues="$10 "
            />
          </div>
        </div>
      </div>
      <LatestRegistered property1="Latest Registered" />
      <nav className="m-0 absolute top-[147px] left-[285px] w-[1561px] flex flex-row items-start justify-center flex-wrap content-start gap-6 max-w-full whitespace-nowrap">
        <Card
          totalUsers="Total Users"
          prop="20,000"
          wallet="/wallet.svg"
          fiRrCaretUp="/firrcaretup-1.svg"
          prop1="+5000"
          last30DaysUsers=" Last 30 days users"
        />
        <Card
          card1Background="linear-gradient(90.13deg, #f7e9ff, #fffefd)"
          totalUsers="Total Subscription"
          prop="15,000"
          wallet="/wallet-1.svg"
          fiRrCaretUp="/firrcaretup-3.svg"
          prop1="- 800"
          typographyColor="#ef4a00"
          last30DaysUsers=" Last 30 days subscription"
        />
        <Card
          card1Background="linear-gradient(90deg, #e6ebff, #fff)"
          totalUsers="Total Free Users"
          prop="5,000"
          wallet="/wallet-2.svg"
          fiRrCaretUp="/firrcaretup-1.svg"
          prop1="+200"
          typographyColor="#45b369"
          last30DaysUsers=" Last 30 days users"
        />
        <Card
          card1Background="linear-gradient(90deg, #e8fff5, #fff)"
          totalUsers="Total Income"
          prop="$42,400"
          wallet="/wallet-3.svg"
          fiRrCaretUp="/firrcaretup-1.svg"
          prop1="+$20,000"
          typographyColor="#45b369"
          last30DaysUsers=" Last 30 days Income"
        />
        <Card
          card1Background="linear-gradient(90.05deg, #ffeeee, #fffcfc)"
          totalUsers="Total Expense "
          prop="$30,000"
          wallet="/wallet-4.svg"
          fiRrCaretUp="/firrcaretup-1.svg"
          prop1="+$20,000"
          typographyColor="#45b369"
          last30DaysUsers=" Last 30 days Income"
        />
      </nav>
      <h3 className="m-0 absolute top-[91px] left-[285px] text-5xl leading-[32px] font-semibold font-[inherit] inline-block w-[1420px] h-8 mq450:text-lgi mq450:leading-[26px]">
        Dashboard
      </h3>
      <img
        className="absolute top-[97px] left-[1704px] w-5 h-5 overflow-hidden"
        alt=""
        src="/component-3.svg"
      />
      <a className="[text-decoration:none] absolute top-[95px] left-[1730px] text-base leading-[24px] font-medium text-color-text-text-secondary-light text-right inline-block w-[116px] h-6 min-w-[116px]">
        Dashboard - AI
      </a>
      <div className="absolute top-[0px] left-[0px] bg-color-text-white w-[312px] h-full overflow-hidden flex flex-col items-start justify-start gap-3 max-w-[90%] text-5xl">
        <div className="w-[312px] h-[72px] bg-color-text-white border-color-neutral-neutral-200 border-r-[1px] border-solid border-color-neutral-neutral-200 border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[18.5px] px-4 shrink-0 z-[2]">
          <div className="h-[35px] w-40 flex flex-row items-start justify-start gap-2">
            <img
              className="h-[35px] w-[35px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/layer-1.svg"
            />
            <div className="h-8 w-[117px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] w-[118px] h-[29px] relative font-semibold text-[inherit] inline-block shrink-0">
                WowDash
              </a>
            </div>
          </div>
        </div>
        <div className="w-[296px] h-[1886px] flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border z-[1]">
          <FrameComponent />
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Dashboard;
