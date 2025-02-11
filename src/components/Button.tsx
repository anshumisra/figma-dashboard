import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type ButtonType = {
  className?: string;
  text?: string;
  rightIcon?: boolean;
  homeDash?: string;
  angleDown?: string;

  /** Variant props */
  hierarchy?: "Defualt" | "Text";
  size?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  hierarchy = "Defualt",
  size = "Sm",
  text = "Dashboard",
  rightIcon = true,
  homeDash,
  angleDown,
}) => {
  return (
    <div
      className={`w-[280px] rounded-spacing-positive-spacing-4 bg-color-button-button h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 box-border text-left text-base text-color-text-white font-inter-body-md-body-md-semibold data-[hierarchy='Text']:data-[size='MD']:bg-[unset] [&_.text23]:data-[hierarchy='Text']:data-[size='MD']:[text-decoration:unset] [&_.text23]:data-[hierarchy='Text']:data-[size='MD']:text-color-text-text-secondary-light [&_.angle-down-icon]:data-[hierarchy='Text']:data-[size='MD']:w-6 [&_.angle-down-icon]:data-[hierarchy='Text']:data-[size='MD']:h-6 [&_.angle-down-icon]:data-[hierarchy='Text']:data-[size='MD']:hidden ${className}`}
      data-hierarchy={hierarchy}
      data-size={size}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-2">
        <div className="flex-1 flex flex-row items-center justify-start gap-3">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src={homeDash}
          />
          <a className="text23 [text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
            {text}
          </a>
        </div>
        {rightIcon && (
          <img
            className="angle-down-icon w-5 relative h-5"
            alt=""
            src={angleDown}
          />
        )}
      </div>
    </div>
  );
};

export default Button;
