import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleSlider = () => {
    dispatch(toggleMenu());
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
        <div className="mx-2 flex items-center">
          <FaYoutube color="red" size={35} />
          <span className="px-1 font-bold ">YouTube</span>
        </div>
      </div>
      <div className="mx-2 flex justify-center items-center md:w-3/5 ">
        <input
          type="text"
          placeholder="Search"
          className="outline-offset-1 py-1 px-3 bg-slate-100 w-3/5 rounded-l-full border-2 border-gray-500"
        />
        <button className=" py-1 px-3 bg-slate-100 hover:bg-slate-200 rounded-r-full border-t-2 border-b-2 border-r-2 border-gray-500">
          Search
        </button>
      </div>
      <div className="mx-2 flex items-center">
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
