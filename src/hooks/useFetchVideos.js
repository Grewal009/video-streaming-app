import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { addVideos } from "../utils/videoSlice";
import { useSelector } from "react-redux";

const useFetchVideos = () => {
  const dispatch = useDispatch();
  //console.log(videos);

  const videos = useSelector((store) => store.videos.video);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json);

    dispatch(addVideos(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default useFetchVideos;
