import React from 'react';
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Footer from "../components/Footer";
import GeneratedContent from "../components/GeneratedContent";
import TotalSubscriber from "../components/TotalSubscriber";
import SalesStatistic from "../components/SalesStatistic";
import TableCell1 from "../components/TableCell1";
import LatestRegistered from "../components/LatestRegistered";
import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";
import Header from "../components/Header";

const Dashboard = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-color-text-bg-color relative">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-[312px] h-full bg-white border-r border-color-neutral-neutral-200 overflow-y-auto">
        <div className="h-[72px] border-b border-color-neutral-neutral-200 px-4 flex items-center">
          <div className="flex items-center gap-2">
            <img className="h-[35px] w-[35px]" alt="Logo" src="/layer-1.svg" />
            <div className="h-8">
              <span className="text-3xl font-semibold">WowDash</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <FrameComponent />
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[312px] p-6">
        {/* Header */}
        <Header />
        
        {/* Dashboard Title */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-semibold">Dashboard</h3>
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" alt="" src="/component-3.svg" />
            <span className="text-base text-color-text-text-secondary-light">Dashboard - AI</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          <Card
            totalUsers="Total Users"
            prop="20,000"
            wallet="/wallet.svg"
            fiRrCaretUp="/firrcaretup-1.svg"
            prop1="+5000"
            last30DaysUsers=" Last 30 days users"
          />
          <Card
            card1Background="linear-gradient(90.13deg, #f7e9ff, #fffefd)"
            totalUsers="Total Subscription"
            prop="15,000"
            wallet="/wallet-1.svg"
            fiRrCaretUp="/firrcaretup-3.svg"
            prop1="- 800"
            typographyColor="#ef4a00"
            last30DaysUsers=" Last 30 days subscription"
          />
          <Card
            card1Background="linear-gradient(90deg, #e6ebff, #fff)"
            totalUsers="Total Free Users"
            prop="5,000"
            wallet="/wallet-2.svg"
            fiRrCaretUp="/firrcaretup-1.svg"
            prop1="+200"
            typographyColor="#45b369"
            last30DaysUsers=" Last 30 days users"
          />
          <Card
            card1Background="linear-gradient(90deg, #e8fff5, #fff)"
            totalUsers="Total Income"
            prop="$42,400"
            wallet="/wallet-3.svg"
            fiRrCaretUp="/firrcaretup-1.svg"
            prop1="+$20,000"
            typographyColor="#45b369"
            last30DaysUsers=" Last 30 days Income"
          />
          <Card
            card1Background="linear-gradient(90.05deg, #ffeeee, #fffcfc)"
            totalUsers="Total Expense "
            prop="$30,000"
            wallet="/wallet-4.svg"
            fiRrCaretUp="/firrcaretup-1.svg"
            prop1="+$20,000"
            typographyColor="#45b369"
            last30DaysUsers=" Last 30 days Income"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2 spans */}
          <div className="lg:col-span-2 space-y-6">
            <GeneratedContent property1="Yearly" />
            <TotalSubscriber />
            
            {/* Top Countries Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Top Countries</h4>
                <FormControl
                  className="w-24"
                  variant="standard"
                  sx={{
                    borderColor: "#d1d5db",
                    borderStyle: "SOLID",
                    borderWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    height: "32px",
                    "& .MuiInputBase-root": {
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                    },
                    "& .MuiInputBase-input": {
                      color: "#4b5563",
                      fontSize: 14,
                      fontWeight: "Medium",
                      fontFamily: "Inter",
                      paddingLeft: "14px",
                    },
                  }}
                >
                  <Select
                    defaultValue="Yearly"
                    disableUnderline
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/chevrondown.svg"
                        style={{ marginRight: "8px" }}
                      />
                    )}
                  >
                    <MenuItem value="Yearly">Yearly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              {/* World Map */}
              <div className="relative h-[246px] mb-4">
                <img
                  className="w-full h-full object-cover"
                  alt="World Map"
                  src="/world.svg"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <button className="p-1.5 bg-neutral-gray-gray-100 rounded-lg">
                    <img className="h-4 w-4" alt="Zoom In" src="/fisrzoomin.svg" />
                  </button>
                  <button className="p-1.5 bg-neutral-gray-gray-100 rounded-lg">
                    <img className="h-4 w-4" alt="Zoom Out" src="/fisrzoomout.svg" />
                  </button>
                </div>
              </div>

              {/* Countries List */}
              <div className="space-y-4">
                {[
                  { name: "USA", users: "1,240", flag: "/img@2x.png", percent: "80%" },
                  { name: "Japan", users: "1,240", flag: "/img-1@2x.png", percent: "60%" },
                  { name: "France", users: "1,240", flag: "/img-2@2x.png", percent: "49%" },
                  { name: "Germany", users: "1,240", flag: "/img-3@2x.png", percent: "100%" },
                  { name: "South Korea", users: "1,240", flag: "/img-4@2x.png", percent: "50%" },
                ].map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        alt={country.name}
                        src={country.flag}
                      />
                      <div>
                        <div className="font-medium">{country.name}</div>
                        <div className="text-sm text-color-text-text-secondary-light">
                          {country.users} Users
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[60px] h-2 bg-neutral-gray-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-color-button-button"
                          style={{ width: country.percent }}
                        />
                      </div>
                      <span className="text-xs font-semibold">{country.percent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Users Overview */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold">Users Overview</h4>
                <FormControl
                  className="w-24"
                  variant="standard"
                  sx={{
                    borderColor: "#d1d5db",
                    borderStyle: "SOLID",
                    borderWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    height: "32px",
                  }}
                >
                  <Select
                    defaultValue="Today"
                    disableUnderline
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/chevrondown-3.svg"
                        style={{ marginRight: "8px" }}
                      />
                    )}
                  >
                    <MenuItem value="Today">Today</MenuItem>
                  </Select>
                </FormControl>
              </div>
              
              {/* Pie Chart */}
              <div className="flex justify-center mb-6">
                <img
                  className="h-[214px] w-[214px]"
                  alt="Users Overview Chart"
                  src="/circle-chart.svg"
                />
              </div>

              {/* Legend */}
              <div className="flex justify-between text-color-text-text-secondary-light">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-color-button-button rounded-spacing-positive-spacing-2" />
                  <span>New: <span className="text-color-text-text-primary-light">500</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-color-alerts-status-warning rounded-spacing-positive-spacing-2" />
                  <span>Subscribed: <span className="text-color-text-text-primary-light">300</span></span>
                </div>
              </div>
            </div>

            <SalesStatistic />

            {/* Latest Transactions */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold">Latest Transactions</h4>
                <button className="text-color-button-button flex items-center gap-1">
                  <span>View All</span>
                  <img className="w-4 h-4" alt="" src="/chevrondown-5.svg" />
                </button>
              </div>

              {/* Transactions List */}
              <div className="space-y-4">
                {[
                  { name: "Dianne Russell", date: "03 Sep 2024", amount: "$20", avatar: "/avatar@2x.png" },
                  { name: "Wade Warren", date: "03 Sep 2024", amount: "$10", avatar: "/avatar-1@2x.png" },
                  { name: "Albert Flores", date: "03 Sep 2024", amount: "$30", avatar: "/avatar-2@2x.png" },
                  { name: "Bessie Cooper", date: "03 Sep 2024", amount: "$40", avatar: "/avatar-3@2x.png" },
                  { name: "Arlene McCoy", date: "03 Sep 2024", amount: "$10", avatar: "/avatar-4@2x.png" },
                  { name: "Arlene McCoy", date: "03 Sep 2024", amount: "$10", avatar: "/avatar-5@2x.png" },
                ].map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        alt={transaction.name}
                        src={transaction.avatar}
                      />
                      <div>
                        <div className="text-base">{transaction.name}</div>
                        <div className="text-sm text-color-text-text-secondary-light">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <TableCell1
                      state="Default"
                      style="Text"
                      supportingText={false}
                      transactionValues={transaction.amount}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="ml-[312px]">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
