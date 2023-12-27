import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div className="p-1 md:p-2 w-[250px] h-[293px] md:w-[350px] md:h-[450px] border border-gray-600 rounded-md overflow-y-scroll flex flex-col-reverse">
        <div>
          {chats.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex shadow-lg rounded-md bg-gray-200">
          <input
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="bg-gray-200 w-full px-2 py-1"
          />
          <button
            onClick={() => {
              dispatch(
                addMessage({
                  name: "Guest",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
            className="px-1 border border-gray-500 hover:bg-gray-300 rounded-lg text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
