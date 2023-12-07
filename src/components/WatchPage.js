import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [serachParams] = useSearchParams();
  const videoId = serachParams.get("v");
  console.log(serachParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-[70%] md:[80%]">
      <h1>WatchPage</h1>
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
        frameborder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchPage;
