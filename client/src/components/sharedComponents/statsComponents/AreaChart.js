import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <AreaChart
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" stroke="#2cb1bc" fill="#bef8fd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
