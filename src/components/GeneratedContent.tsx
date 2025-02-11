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
import ContentChart from "./ContentChart";

export type GeneratedContentType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const GeneratedContent: FunctionComponent<GeneratedContentType> = ({
  className = "",
  property1 = "Yearly",
}) => {
  return (
    <div
      className={`absolute top-[1210px] left-[1077px] shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] rounded-spacing-positive-spacing-4 bg-color-text-white w-[768px] h-96 overflow-hidden flex flex-col items-end justify-start pt-5 px-4 pb-6 box-border gap-[35px] text-left text-lg text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
      data-property1={property1}
    >
      <div className="w-[728px] h-[62px] flex flex-row items-start justify-end py-0 pl-0 pr-2 box-border">
        <div className="h-[62px] w-[720px] flex flex-col items-start justify-start gap-2.5">
          <div className="w-[720px] h-8 flex flex-row items-start justify-start">
            <div className="h-[30px] w-[624px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[625px] h-7 relative leading-[28px] font-semibold inline-block shrink-0">
                Generated Content
              </div>
            </div>
            <FormControl
              className="h-8 w-24 font-inter-body-md-body-md-semibold font-medium text-sm text-color-text-text-secondary-light"
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
                    src="/chevrondown-1.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Yearly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="w-[200px] h-5 flex flex-row items-start justify-start gap-4 text-sm text-color-text-text-secondary-light">
            <div className="h-5 w-[89px] flex flex-row items-start justify-start gap-1.5">
              <div className="h-4 w-3 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-3 relative rounded-[50%] bg-color-button-button h-3" />
              </div>
              <div className="h-5 w-[72px] relative leading-[20px] font-semibold inline-block shrink-0">
                <span>{`Word: `}</span>
                <span className="text-color-text-text-primary-light">500</span>
              </div>
            </div>
            <div className="h-5 w-[95px] flex flex-row items-start justify-start gap-1.5">
              <div className="h-4 w-3 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-3 relative rounded-[50%] bg-color-alerts-status-warning h-3" />
              </div>
              <div className="h-5 w-[78px] relative leading-[20px] font-semibold inline-block shrink-0">
                <span>{`Image: `}</span>
                <span className="text-color-text-text-primary-light">300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentChart />
    </div>
  );
};

export default GeneratedContent;
