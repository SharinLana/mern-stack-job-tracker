import React, { useState } from "react";
import Wrapper from "../../../assets/wrappers/ChartsContainer";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import { useAppContext } from "../../../context/appContext";

const ChartsContainer = () => {
  const { showLargeSidebar, monthlyApplications: data } = useAppContext();
  const [barBtn, setBarBtn] = useState(true);

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <h4>Monthly Applications</h4>
      <button
        type="button"
        className="chart-btn"
        onClick={() => setBarBtn(!barBtn)}
      >
        {barBtn ? "View Area Chart" : "View Bar Chart"}
      </button>
      {barBtn && <BarChartComponent data={data} />}
      {!barBtn && <AreaChartComponent data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
