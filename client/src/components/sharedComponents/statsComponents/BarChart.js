import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; 

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart margin={{ top: 50 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* "date" came from jobs-controller.js (after mapping the monthlyApplications,
            we returned {date, count}. Here we use date as a dataKey */}
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar fill="#39B5E0" barSize={75} dataKey="count" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
