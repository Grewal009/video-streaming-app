import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { SEARCH_API, YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { addResult } from "../utils/resultsSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const toggleSlider = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 250);

    //clean up component during rerender
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const updateSearchQuery = (s) => {
    setSearchQuery(s);
    // console.log(searchQuery);
    updateVideos();
  };

  const updateVideos = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("New Videos Data : ", json.items);

    dispatch(addResult(json.items));
  };

  return (
    <div className="m-2 p-2 flex justify-between">
      <div className="flex">
        <div className="w-10 h-10 mx-2 bg-green-300 rounded-full hover:bg-slate-200 flex justify-center items-center">
          <RxHamburgerMenu
            size={20}
            className="cursor-pointer"
            onClick={toggleSlider}
          />
        </div>
        <Link to={"/"}>
          <div className="mx-2 flex items-center">
            <FaYoutube color="red" size={35} />
            <span className="px-1 font-bold ">YouTube</span>
          </div>{" "}
        </Link>
      </div>
      <div className="w-5/12 flex flex-col justify-center items-center">
        <div className="mx-2 flex justify-center items-center z-10 w-11/12">
          <input
            type="text"
            placeholder="Search"
            className=" outline-offset-1 py-1 px-3 bg-slate-100 w-3/5  rounded-l-full border-2 border-gray-500 z-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 1000)}
          />

          <ul className="top-[55px] absolute rounded-2xl border border-gray-200 w-auto z-0 bg-white">
            {showSuggestions &&
              searchSuggestions.map((s, index) => (
                <Link to={"/results"} key={index}>
                  <li
                    key={index}
                    className="px-3 py-1 shadow-md overflow-hidden hover:bg-gray-100"
                    onClick={() => updateSearchQuery(s)}
                  >
                    🔍 {s}
                  </li>
                </Link>
              ))}
          </ul>

          <button className="py-1 px-3 bg-slate-100 hover:bg-slate-200 rounded-r-full border-t-2 border-b-2 border-r-2 border-gray-500">
            Search
          </button>
        </div>
        {/* <div className="mt-[95px] -ml-[15%] absolute bg-gray-300 border border-gray-600 w-2/12  z-0 rounded-2xl">
          <ul className="">
            <li className="px-3 py-1 shadow-md">Hello</li>
            <li className="px-3 py-1">Hello</li>
          </ul>
        </div> */}
      </div>
      <div className="mx-2 flex items-center">
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
