import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type TableHeaderType = {
  className?: string;
  tableHeader?: string;

  /** Variant props */
  arrow?: boolean;
  helpIcon?: boolean;
  state?: string;

  /** Style props */
  tableHeaderHeight?: CSSProperties["height"];
  tableHeaderDisplay?: CSSProperties["display"];
};

const TableHeader: FunctionComponent<TableHeaderType> = ({
  className = "",
  arrow = false,
  helpIcon = false,
  state = "Default",
  tableHeader,
  tableHeaderHeight,
  tableHeaderDisplay,
}) => {
  const tableHeaderStyle: CSSProperties = useMemo(() => {
    return {
      height: tableHeaderHeight,
      display: tableHeaderDisplay,
    };
  }, [tableHeaderHeight, tableHeaderDisplay]);

  return (
    <div
      className={`flex flex-row items-center justify-start text-left text-base text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
      data-arrow={arrow}
      data-helpIcon={helpIcon}
      data-state={state}
    >
      <div
        className="relative leading-[24px] font-medium"
        style={tableHeaderStyle}
      >
        {tableHeader}
      </div>
    </div>
  );
};

export default TableHeader;
