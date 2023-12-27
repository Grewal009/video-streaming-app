import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Pollling");
      dispatch(
        addMessage({
          name: "Sam",
          message: "lorem dhshdj sdhjhsd shdhgs sdhsg sdhgsdhsdg🚀",
        })
      );
      return () => {
        clearInterval(i);
      };
    }, 2000);
  }, []);

  return (
    <div className="p-1 md:p-2 w-[250px] h-[300px] md:w-[350px] md:h-[450px] border border-gray-600 rounded-md overflow-y-scroll">
      <h3 className="text-sm font-medium">Livechat</h3>
      {chats.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
