import React from "react";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../../../assets/wrappers/StatsContainer";
import { useAppContext } from "../../../context/appContext";
import StatsItem from "../../sharedComponents/statsComponents/StatsItem";

const StatsContainer = () => {
  const { showLargeSidebar, stats } = useAppContext();

  const defaultStats = [
    {
      title: "pending application",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#FBB454",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#39B5E0",
      bcg: "#C0DEFF",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#A31ACB",
      bcg: "#a21acb65",
    },
  ];

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
