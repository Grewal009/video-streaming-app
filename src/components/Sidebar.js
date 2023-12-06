import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleSideBar = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!toggleSideBar) return null;

  return (
    <div className="w-[30%] md:w-[20%]">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Films</li>
        <li>Gaming</li>
        <li>Sport</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
