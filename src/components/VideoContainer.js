import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { addVideos } from "../utils/videoSlice";
import { useEffect } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.video);
  if (!videos) return null;

  return (
    <div className="m-2 pt-1 flex flex-wrap h-screen overflow-y-scroll">
      {videos.map((vid, index) => (
        <Link to={"/watch?v=" + vid.id} key={index} className="mx-2 my-2">
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
