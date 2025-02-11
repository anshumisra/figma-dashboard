import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type MenuBar1Type = {
  className?: string;
  rightIcon?: boolean;
  calendar?: string;
  dashboard?: string;
  component2?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  calendarIconOverflow?: CSSProperties["overflow"];
};

const MenuBar1: FunctionComponent<MenuBar1Type> = ({
  className = "",
  property1 = "On",
  rightIcon = false,
  calendar,
  calendarIconOverflow,
  dashboard,
  component2,
}) => {
  const calendarIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: calendarIconOverflow,
    };
  }, [calendarIconOverflow]);

  return (
    <div
      className={`w-[280px] rounded-spacing-s-8 bg-color-text-white overflow-hidden flex flex-col items-start justify-start py-2.5 pl-3 pr-[7px] box-border text-left text-base text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
      data-property1={property1}
    >
      <div className="w-[257px] flex flex-row items-center justify-start">
        <div className="flex-1 flex flex-row items-start justify-start gap-3">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src={calendar}
            style={calendarIconStyle}
          />
          <div className="flex-1 relative leading-[24px] font-medium">
            {dashboard}
          </div>
        </div>
        {rightIcon && (
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src={component2}
          />
        )}
      </div>
    </div>
  );
};

export default MenuBar1;
