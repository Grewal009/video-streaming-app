import { useState } from "react";
import { useSelector } from "react-redux";

const VideoInfo = () => {
  const [showComment, setShowComment] = useState(false);
  const info = useSelector((store) => store.info.vinfo);

  const { snippet, statistics } = info;

  const { channelTitle, description, publishedAt, localized, tags } = snippet;

  const { title } = localized;

  const { commentCount, likeCount, viewCount } = statistics;

  let firstFiveTags = [];
  for (let i = 0; i < 3; i++) {
    firstFiveTags.push(tags?.[i]);
  }

  const toggleDescription = () => {
    setShowComment(!showComment);
  };

  if (!info) return null;
  return (
    <div className="w-[80%] mt-2 ">
      <p className="text-xl font-medium w-auto h-auto leading-5">{title}</p>
      <p className="text-base font-bold">{channelTitle}</p>
      <span className="">{likeCount} likes</span>

      <div className="bg-[#F2F2F2] mt-2 p-3 rounded-lg ">
        <p className="text-sm font-medium">
          {viewCount} views &nbsp; Published on{" "}
          {publishedAt.split("T").slice(0, 1)} &nbsp;
          {firstFiveTags.map((tag) => "#" + tag + " ")}
        </p>
        <div
          className={
            showComment ? "h-auto overflow-clip" : "h-[40px] overflow-clip"
          }
        >
          <p className="leading-5 text-gray-700">{description}</p>
        </div>
        <span onClick={toggleDescription} className="font-medium">
          {showComment ? "show less" : "...more"}
        </span>
      </div>
    </div>
  );
};

export default VideoInfo;
