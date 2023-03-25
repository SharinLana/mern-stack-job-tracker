import React from "react";
import Wrapper from "../../../assets/wrappers/ChartsContainer";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import { useAppContext } from "../../../context/appContext";

const ChartsContainer = () => {
  const { showLargeSidebar, monthlyApplications: data } = useAppContext();

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <h4>Monthly Applications</h4>
      <button type="button" className="chart-btn">
        Area Chart / Bar Chart
      </button>
      <BarChartComponent data={data} />
      <AreaChartComponent data={data} />
    </Wrapper>
  );
};

export default ChartsContainer;
