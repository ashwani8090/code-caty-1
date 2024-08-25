// Message.tsx
import React from "react";

type MessageType = "success" | "danger" | "info";

interface MessageProps {
  type?: MessageType;
  message: string;
}

const messageTypes: Record<MessageType, string> = {
  success: "bg-success text-white border-success",
  danger: "bg-danger text-white border-danger",
  info: "bg-info text-white border-info",
};

const Message: React.FC<MessageProps> = ({ type = "info", message }) => {
  const messageClass = messageTypes[type] || messageTypes.info;

  return (
    <div
      className={`p-1 border-l-4 ${messageClass} rounded opacity-70 text-[10px]`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
