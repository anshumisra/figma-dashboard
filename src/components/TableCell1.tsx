import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type TableCell1Type = {
  className?: string;
  transactionValues?: string;

  /** Variant props */
  state?: string;
  style?: string;
  supportingText?: boolean;
};

const TableCell1: FunctionComponent<TableCell1Type> = ({
  className = "",
  state = "Default",
  style = "Lead text",
  supportingText = true,
  transactionValues,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-end py-5 pl-4 pr-0 text-left text-base text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
      data-state={state}
      data-style={style}
      data-supportingText={supportingText}
    >
      <div className="relative leading-[24px] font-medium">
        {transactionValues}
      </div>
    </div>
  );
};

export default TableCell1;
