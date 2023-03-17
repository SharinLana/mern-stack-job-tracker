import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; //https://recharts.org

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
