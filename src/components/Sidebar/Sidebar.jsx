import React from "react";
import { IoAnalyticsSharp, IoPerson } from "react-icons/io5";
import { HiTrendingUp, HiDocumentReport } from "react-icons/hi";
import { MdInventory, MdEmail } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const dashboardItems = [
  { icon: IoAnalyticsSharp, label: "Analytics" },
  { icon: HiTrendingUp, label: "Sales" },
];

const quickMenuItems = [
  { icon: IoPerson, label: "Users" },
  { icon: MdInventory, label: "Products" },
  { icon: FaDollarSign, label: "Transactions" },
  { icon: HiDocumentReport, label: "Reports" },
];

const notificationItems = [
  { icon: MdEmail, label: "Mail" },
  { icon: IoMdNotifications, label: "Feedback" },
  { icon: MdEmail, label: "Messages" },
];

const Sidebar = () => {
  const renderItems = (items) =>
    items.map((item) => (
      <div
        key={item.label}
        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
      >
        <item.icon className="text-xl" />
        <span>{item.label}</span>
      </div>
    ));

  return (
    <div className="w-64 bg-gray-50 pt-15 h-screen p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Dashboard</h2>
        {renderItems(dashboardItems)}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Quick Menu</h2>
        {renderItems(quickMenuItems)}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Notifications</h2>
        {renderItems(notificationItems)}
      </div>
    </div>
  );
};

export default Sidebar;