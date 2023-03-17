import React from "react";
import Wrapper from "../../../assets/wrappers/ChartsContainer";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";

const ChartsContainer = () => {
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" className="chart-btn">Area Chart / Bar Chart</button>
      <BarChartComponent />
      <AreaChartComponent />
    </Wrapper>
  );
};

export default ChartsContainer;
