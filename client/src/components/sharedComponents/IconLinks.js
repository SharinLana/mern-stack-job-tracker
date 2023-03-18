import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp size={30} /> },
  { id: 2, text: "all jobs", path: "all-jobs", icon: <MdQueryStats size={30}/> },
  { id: 3, text: "add job", path: "add-job", icon: <FaWpforms size={30}/> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile size={30}/> },
];

export default links;