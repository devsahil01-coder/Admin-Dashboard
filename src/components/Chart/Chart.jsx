import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000, // Unique Visitors
      pv: 2400, // Page Views
      amt: 2400, // Amount/Revenue
      activeUsers: 200,
    },
    {
      name: "Feb",
      activeUsers: 980,
    },
    {
      name: "Mar",
      activeUsers: 200,
    },
    {
      name: "Apr",
      activeUsers: 1300,
    },
    {
      name: "May",
      activeUsers: 400,
    },
    {
      name: "Jun",
      activeUsers: 700,
    },
    {
      name: "Jul",
      activeUsers: 100,
    },
  ];

  return (
    <div className="bg-white shadow-2xl p-5 m-3 ">
      <h3>Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="activeUsers" stroke="#5550bd" />
        <Tooltip />
        <CartesianGrid  stroke="#e0dfdf" strokeDasharray={"5 5"} />
      
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
