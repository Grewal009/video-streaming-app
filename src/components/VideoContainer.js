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

  const getMoreVideos = () => {
    getVideos();
  };
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json);
    dispatch(addVideos(json.items));
  };

  const moreVideos = (event) => {
    // console.log("event.target.scrollTop", event.target.scrollTop);
    // console.log("event.target.offsetHeight", event.target.offsetHeight);
    // console.log("event.target.scrollHeight", event.target.scrollHeight);
    if (
      event.target.scrollTop + event.target.offsetHeight >=
      event.target.scrollHeight - 10
    ) {
      getMoreVideos();
      //console.log("scroll...");
    }
  };

  return (
    <div
      className="m-2 pt-1 flex flex-wrap h-screen overflow-y-scroll"
      onScroll={moreVideos}
    >
      {videos.map((vid, index) => (
        <Link to={"/watch?v=" + vid.id} key={index} className="mx-2 my-2">
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
