import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import LatestVideo from "./LatestVideo";
import { addInfo } from "../utils/infoSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const videodata = useSelector((store) => store.info.vinfo);
  const dispatch = useDispatch();
  let [serachParams] = useSearchParams();

  //videoId is added in dependency array. when it will change useEffect hook will be called.
  const videoId = serachParams.get("v");
  // console.log(serachParams.get("v"));

  // console.log("videodata : ", videodata);

  const getVideoData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    // console.log("data : ", json);

    dispatch(addInfo(json?.items?.[0]));
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, [videoId]);
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

        <VideoInfo />
        <CommentsContainer />
      </div>

      <LatestVideo />
    </div>
  );
};

export default WatchPage;
