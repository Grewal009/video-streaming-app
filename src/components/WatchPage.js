import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const [videodata, setVideodata] = useState(null);
  const dispatch = useDispatch();
  let [serachParams] = useSearchParams();
  const videoId = serachParams.get("v");
  console.log(serachParams.get("v"));

  console.log(videodata);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    setVideodata(json.items[0]);
  };
  if (videodata === null) return null;
  return (
    <div className="mt-3 w-[70%] md:[80%]">
      <iframe
        className="w-[80%] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoId +
          "?autoplay=1&playlist=" +
          videoId +
          "&loop=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <VideoInfo info={videodata} />
    </div>
  );
};

export default WatchPage;
