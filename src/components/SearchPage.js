import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

const SearchPage = () => {
  const results = useSelector((store) => store?.res?.result);
  if (!results) return null;
  const { id, snippet } = results;
  console.log("res : ", id, snippet);

  return (
    <div className="m-2 pt-1 w-[80%] flex flex-col ">
      {results.map((res, index) => (
        <Link
          to={"/watch?v=" + res.id.videoId}
          key={index}
          className="
        mx-2 my-2"
        >
          <Card info={res.snippet} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
