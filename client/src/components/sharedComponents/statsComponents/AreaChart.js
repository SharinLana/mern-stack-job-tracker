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

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <AreaChart
        margin={{
          top: 50,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* "date" came from jobs-controller.js (after mapping the monthlyApplications,
            we returned {date, count}. Here we use date as a dataKey */}
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" stroke="#39B5E0" fill="#C0DEFF" dataKey="count" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
