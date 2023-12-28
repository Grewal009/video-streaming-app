import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import useFetchVideos from "../hooks/useFetchVideos";

const Body = () => {
  useFetchVideos();

  return (
    <div className="flex justify-center">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
