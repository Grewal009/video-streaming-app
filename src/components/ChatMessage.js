import { FaUserCircle } from "react-icons/fa";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="mt-1 bg-gray-100 rounded-md p-1 shadow-md ">
      <div className="flex items-center">
        <FaUserCircle className="w-5 h-5 md:w-7 md:h-7 mr-1" />

        <span className="text-sm font-semibold">{name}</span>
        <p className="ml-2 text-sm font-normal leading-4">{message}</p>
      </div>
      <div></div>
    </div>
  );
};

export default ChatMessage;
