const VideoCard = ({ info }) => {
  // console.log("info : ", info);

  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="w-72 m-2 ">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <p className=" text-base font-bold leading-5">{title}</p>
      <p className="text-sm font-semibold leading-5">{channelTitle}</p>

      <p className="text-sm leading-5">
        {viewCount >= 1000000
          ? (viewCount / 1000000).toFixed(1) + "M"
          : viewCount >= 1000
          ? (viewCount / 1000).toFixed(2) + "K"
          : viewCount + "views"}{" "}
        views
      </p>
    </div>
  );
};

export default VideoCard;
