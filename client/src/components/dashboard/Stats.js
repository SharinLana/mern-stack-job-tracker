import React, { useEffect } from "react";
import StatsContainer from "../sharedComponents/statsComponents/StatsContainer";
import ChartsContainer from "../sharedComponents/statsComponents/ChartsContainer";
import { useAppContext } from "../../context/appContext";

const Stats = () => {
  const { getStats, monthlyApplications } = useAppContext();

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
