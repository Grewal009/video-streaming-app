import Button from "./Button";

const list = [
  "Music",
  "Stocks",
  "Live",
  "Sales",
  "Cars",
  "Physics",
  "Smartphones",
  "Comedy",
  "AI",
  "Trailers",
  "Gaming",
  "Podcasts",
];
const ButtonList = () => {
  return (
    <div className=" flex overflow-x-scroll no-scrollbar">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
