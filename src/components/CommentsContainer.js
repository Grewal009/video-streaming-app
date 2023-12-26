import { FaUserCircle } from "react-icons/fa";

const data = [
  {
    name: "Aneel",
    text: "comment by Aneel",
    reply: [
      {
        name: "Jassi",
        text: "comment by Jassi",
        reply: [],
      },
      {
        name: "Jassi",
        text: "comment by Jassi",
        reply: [],
      },
    ],
  },
  {
    name: "Aneel",
    text: "comment by Aneel",
    reply: [
      {
        name: "Jassi",
        text: "comment by Jassi",
        reply: [
          {
            name: "Noor",
            text: "comment by Noor",
            reply: [
              {
                name: "Ravi",
                text: "comment by Ravi",
                reply: [
                  {
                    name: "Noor",
                    text: "comment by Noor",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="mb-2 flex flex-row justify-start items-center bg-[#F2F2F2] rounded-lg">
      <FaUserCircle className="ml-1 w-8 h-8 md:w-10 md:h-10" />
      <div className="mx-3">
        <p className="leading-5 text-base font-semibold ">{name}</p>
        <p className="text-base font-normal">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      {data.map((comment, index) => (
        <div key={index} className="mb-2">
          <Comment data={comment} />
          <div className="ml-2 border-l border-gray-500">
            <CommentsList data={comment?.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="mt-3 w-[80%]">
      <h3 className="mb-2 text-xl font-bold ">Comments</h3>
      <CommentsList data={data} />
    </div>
  );
};

export default CommentsContainer;
