const Card = ({ info }) => {
  const { thumbnails, title, description, channelId, publishedAt } = info;
  return (
    <div className="mx-2 my-2 w-[90%] md:flex md:flex-row md-[w-60%] md:flex-nowrap">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg w-[350px] "
      />
      <div>
        <p className=" text-base font-bold leading-5">{title}</p>
        <p className="text-sm font-semibold leading-5">
          {publishedAt.split("T").slice(0, 1)}{" "}
        </p>
      </div>

      {/* <p className="text-sm leading-5">
        {viewCount >= 1000000
          ? (viewCount / 1000000).toFixed(1) + "M"
          : viewCount >= 1000
          ? (viewCount / 1000).toFixed(2) + "K"
          : viewCount + "views"}{" "}
        views
      </p> */}
    </div>
  );
};

export default Card;
