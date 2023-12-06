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
];
const ButtonList = () => {
  return (
    <div className=" flex overflow-x-scroll no-scrollbar">
      {list.map((btn) => (
        <Button name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
