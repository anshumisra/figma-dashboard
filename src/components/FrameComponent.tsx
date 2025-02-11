import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Dashboard1 from "./Dashboard1";
import Button from "./Button";
import MenuBar1 from "./MenuBar1";
import Invoice from "./Invoice";
import Invoice1 from "./Invoice1";
import Layouts from "./Layouts";
import Components from "./Components";
import Forms from "./Forms";
import Table from "./Table";
import Chart from "./Chart";
import Users from "./Users";
import Map1 from "./Map1";
import Settings from "./Settings";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[1886px] w-[280px] flex flex-col items-start justify-start gap-spacing-positive-spacing-4 shrink-0 text-left text-base text-color-text-text-secondary-light font-inter-body-md-body-md-semibold ${className}`}
    >
      <div className="w-[280px] h-[482px] flex flex-row items-start justify-start text-color-text-white">
        <Dashboard1
          subItem5="CRM"
          subItem4="Investment"
          subItem3="Cryptocracy "
          subItem2="eCommerce"
          subItem1="AI "
          hideSubs
        />
      </div>
      <div className="w-[90px] h-6 relative leading-[24px] font-semibold inline-block shrink-0">
        Application
      </div>
      <div className="w-[280px] h-[476px] flex flex-col items-start justify-start gap-spacing-positive-spacing-3">
        <Button
          hierarchy="Text"
          size="MD"
          text="Email"
          rightIcon={false}
          homeDash="/envelope.svg"
          angleDown="/angledown1.svg"
        />
        <Button
          hierarchy="Text"
          size="MD"
          text="Chat"
          rightIcon={false}
          homeDash="/chatdots.svg"
          angleDown="/angledown1.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon={false}
          calendar="/calendar.svg"
          dashboard="Calendar"
          component2="/component-2.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon={false}
          calendar="/map.svg"
          calendarIconOverflow="unset"
          dashboard="Kanban"
          component2="/component-2.svg"
        />
        <Invoice hasMenu={false} />
        <Invoice1 hasMenu={false} />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/desktop.svg"
          calendarIconOverflow="unset"
          dashboard="CRM"
          component2="/component-2-1.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/shoppingcartstar.svg"
          calendarIconOverflow="unset"
          dashboard="eCommerce"
          component2="/component-2-1.svg"
        />
        <Layouts menu={false} />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/handholdingdollarcircle.svg"
          calendarIconOverflow="unset"
          dashboard="Investment"
          component2="/component-2-1.svg"
        />
      </div>
      <div className="w-[93px] h-6 relative leading-[24px] font-semibold inline-block shrink-0">
        UI Elements
      </div>
      <div className="w-[280px] h-[476px] flex flex-col items-start justify-start gap-spacing-positive-spacing-3 text-sm">
        <Components subMenu={false} />
        <Forms subMenu={false} />
        <Table subMenu={false} />
        <Chart subMenu={false} />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/vector.svg"
          calendarIconOverflow="unset"
          dashboard="Widgets"
          component2="/component-2.svg"
        />
        <Users subMenu={false} />
        <div className="w-[280px] h-11 flex flex-col items-end justify-start">
          <MenuBar1
            property1="OFF"
            rightIcon
            calendar="/component-2-17.svg"
            calendarIconOverflow="unset"
            dashboard={`Role & Access`}
            component2="/component-2.svg"
          />
        </div>
        <div className="w-[280px] h-11 flex flex-col items-end justify-start">
          <MenuBar1
            property1="OFF"
            rightIcon
            calendar="/component-2-19.svg"
            calendarIconOverflow="unset"
            dashboard="Assign Role"
            component2="/component-2.svg"
          />
        </div>
        <div className="w-[280px] h-11 flex flex-col items-end justify-start">
          <MenuBar1
            property1="OFF"
            rightIcon
            calendar="/component-2-21.svg"
            calendarIconOverflow="unset"
            dashboard="Map"
            component2="/component-2.svg"
          />
        </div>
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/target.svg"
          calendarIconOverflow="unset"
          dashboard="Icons"
          component2="/component-2.svg"
        />
      </div>
      <div className="w-[49px] h-6 relative leading-[24px] font-semibold inline-block shrink-0">
        Pages
      </div>
      <div className="w-[280px] h-[332px] flex flex-col items-start justify-start gap-spacing-positive-spacing-3 text-sm">
        <Map1 subMenu={false} />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/imagegallery.svg"
          calendarIconOverflow="unset"
          dashboard="Gallery"
          component2="/component-2.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/dollarsquare.svg"
          calendarIconOverflow="unset"
          dashboard="Pricing"
          component2="/component-2.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/questionsquare.svg"
          calendarIconOverflow="unset"
          dashboard="FAQs. "
          component2="/component-2.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/meh.svg"
          calendarIconOverflow="hidden"
          dashboard="404"
          component2="/component-2.svg"
        />
        <MenuBar1
          property1="OFF"
          rightIcon
          calendar="/exclamationcircle.svg"
          calendarIconOverflow="unset"
          dashboard={`Terms & Conditions`}
          component2="/component-2.svg"
        />
        <Settings hasMenu={false} />
      </div>
    </div>
  );
};

export default FrameComponent;
