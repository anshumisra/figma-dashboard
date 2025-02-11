import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import MenuBar1 from "./MenuBar1";

export type SettingsType = {
  className?: string;
  hasMenu?: boolean;
};

const Settings: FunctionComponent<SettingsType> = ({
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
        calendar="/settings.svg"
        calendarIconOverflow="unset"
        dashboard="Settings"
        component2="/component-2.svg"
      />
      {hasMenu && (
        <div className="flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
          <div className="w-[236px] rounded-spacing-s-8 bg-color-button-button-focus flex flex-row items-center justify-start py-[7px] px-3 box-border text-color-text-text-primary-light">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-button-button h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Company
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-warning h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Notification
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-error h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Notification Alert
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Theme
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-info h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Currencies
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-secoundary-color h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Languages
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-alerts-status-sucess h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Payment Gateway
              </div>
            </div>
          </div>
          <div className="w-[236px] rounded-spacing-s-8 flex flex-row items-center justify-start py-[7px] px-3 box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
              <div className="w-2 relative rounded-[50%] bg-color-button-button h-2" />
              <div className="h-6 w-[194px] relative leading-[24px] font-medium inline-block shrink-0">
                Api Integration
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
