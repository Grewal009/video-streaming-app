import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.video);
  if (!videos) return null;
  return (
    <div className="m-2 pt-1 flex flex-wrap">
      {videos.map((vid, index) => (
        <Link to={"/watch?v=" + vid.id} key={index}>
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
