import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import LatestVideo from "./LatestVideo";

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
  }, [videodata]);

  const getVideoData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setVideodata(json?.items[0]);
  };
  if (!videodata) return null;
  return (
    <div className="m-3 px-3 flex">
      <div className=" w-[80%] flex flex-col items-center">
        <iframe
          className="w-[90%] aspect-video"
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

      <LatestVideo />
    </div>
  );
};

export default WatchPage;
