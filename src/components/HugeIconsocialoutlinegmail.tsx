import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type HugeIconsocialoutlinegmailType = {
  className?: string;
};

const HugeIconsocialoutlinegmail: FunctionComponent<
  HugeIconsocialoutlinegmailType
> = ({ className = "" }) => {
  return (
    <div
      className={`w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1] ${className}`}
    >
      <div className="absolute h-[81.25%] w-[89.58%] top-[9.58%] right-[5%] bottom-[9.17%] left-[5.42%] rounded border-color-text-text-primary-light border-[1.5px] border-solid box-border" />
      <img
        className="absolute h-[33.33%] w-[83.33%] top-[29.17%] right-[8.33%] bottom-[37.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/notification-icon.svg"
      />
    </div>
  );
};

export default HugeIconsocialoutlinegmail;
