import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  if (videos.length === 0) return null;
  return (
    <div className=" flex flex-wrap">
      {videos.map((video, index) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
