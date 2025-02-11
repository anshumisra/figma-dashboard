import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type CardType = {
  className?: string;
  totalUsers?: string;
  prop?: string;
  wallet?: string;
  fiRrCaretUp?: string;
  prop1?: string;
  last30DaysUsers?: string;

  /** Style props */
  card1Background?: CSSProperties["background"];
  typographyColor?: CSSProperties["color"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  card1Background,
  totalUsers,
  prop,
  wallet,
  fiRrCaretUp,
  prop1,
  typographyColor,
  last30DaysUsers,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      background: card1Background,
    };
  }, [card1Background]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: typographyColor,
    };
  }, [typographyColor]);

  return (
    <div
      className={`flex-1 rounded-spacing-positive-spacing-4 [background:linear-gradient(89.96deg,_#e6f9ff,_#feffff)] border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[18px] px-[19px] gap-3 min-w-[287px] max-w-[293px] min-h-[132px] text-left text-base text-color-text-text-primary-light font-inter-body-md-body-md-semibold ${className}`}
      style={card1Style}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-1">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[24px] font-medium">
              {totalUsers}
            </div>
          </div>
          <div className="self-stretch relative text-5xl leading-[32px] font-semibold mq450:text-lgi mq450:leading-[26px]">
            {prop}
          </div>
        </div>
        <img
          className="h-[50px] w-[50px] relative rounded-spacing-positive-spacing-9 overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={wallet}
        />
      </div>
      <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[60px] text-sm text-color-alerts-status-sucess">
        <div className="flex flex-row items-center justify-start">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src={fiRrCaretUp}
          />
        </div>
        <div className="relative leading-[20px] font-medium">
          <span style={spanStyle}>{prop1}</span>
          <span className="text-color-text-text-primary-light">
            {last30DaysUsers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
