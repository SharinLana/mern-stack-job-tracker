import { UnauthorizedError } from "../errors/index.js";

const checkPermissions = (currentUser, jobCreator) => {
  //  console.log(jobCreator); // new ObjectId("6418e995c3b062947250b705")
  if (currentUser.userId === jobCreator.toString()) return;
  if (currentUser.userId === "admin") return;
  throw new UnauthorizedError("Not authorized to access this route!");
};

export default checkPermissions;
