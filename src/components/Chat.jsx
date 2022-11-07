import React, { useContext } from "react";
import { BsCameraVideoFill } from "react-icons/bs"
import { HiUserAdd } from "react-icons/hi"
import { FiMoreHorizontal } from "react-icons/fi"
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext)
  
  return <div className="chat">
    <div className="chatInfo">
      <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <BsCameraVideoFill />
        <HiUserAdd />
        <FiMoreHorizontal />
      </div>
    </div>
    <Messages />
    <Input />
  </div>;
};

export default Chat;
