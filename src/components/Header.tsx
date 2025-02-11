import { FunctionComponent } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import HugeIconsocialoutlinegmail from "./HugeIconsocialoutlinegmail";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] right-[0px] bg-color-text-white w-[1608px] h-[72px] overflow-hidden flex flex-row items-start justify-start py-4 px-6 box-border gap-6 text-center text-3xl text-color-text-text-primary-light font-lineawesome ${className}`}
    >
      <div className="h-8 w-6 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
        <div className="w-6 h-[25px] relative opacity-[0.9]">
          <img
            className="absolute h-[96%] w-full top-[0%] right-[0%] bottom-[4%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
          />
          <h3 className="m-0 absolute w-[95.83%] top-[calc(50%_-_12.5px)] left-[4.17%] text-inherit font-medium font-[inherit] inline-block h-[25px]">
            
          </h3>
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] h-10 w-[1208px] font-inter-body-md-body-md-semibold font-medium text-sm text-gray z-[3]"
        placeholder="Search"
        variant="outlined"
        InputProps={{
          startAdornment: <img width="15px" height="15px" src="/search.svg" />,
        }}
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "40px",
            paddingLeft: "16px",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "14px",
          },
          "& .MuiInputBase-input": {
            paddingLeft: "11.5px",
            color: "rgba(17, 24, 39, 0.5)",
          },
          width: "1208px",
        }}
      />
      <div className="h-10 w-[280px] flex flex-row items-start justify-start gap-5 z-[2]">
        <img
          className="h-10 w-10 relative"
          loading="lazy"
          alt=""
          src="/theme.svg"
        />
        <div className="h-10 w-10 flex flex-row items-start justify-start relative gap-2">
          <div className="h-10 w-10 relative rounded-[50%] bg-color-neutral-neutral-200 z-[0]" />
          <img
            className="h-6 w-6 absolute !m-[0] top-[8px] left-[8px] rounded-[50%] object-cover z-[1]"
            alt=""
            src="/notification-icons@2x.png"
          />
        </div>
        <div className="w-10 flex flex-row items-start justify-start relative gap-2">
          <div className="w-10 relative rounded-[50%] bg-color-neutral-neutral-200 h-10 z-[0]" />
          <HugeIconsocialoutlinegmail />
        </div>
        <div className="h-10 w-10 flex flex-row items-start justify-start relative gap-2">
          <div className="w-10 relative rounded-[50%] bg-color-neutral-neutral-200 h-10 z-[0]" />
          <img
            className="h-6 w-6 absolute !m-[0] top-[8px] left-[8px] overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/hugeiconinterfaceoutlinenotification-03.svg"
          />
          <div className="h-2 w-2 absolute !m-[0] top-[0px] left-[28px] rounded-[50%] bg-color-alerts-status-error z-[2]" />
        </div>
        <img
          className="h-10 w-10 relative"
          loading="lazy"
          alt=""
          src="/man438081-960-720.svg"
        />
      </div>
    </div>
  );
};

export default Header;
