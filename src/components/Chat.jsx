import React,{createContext, useContext} from "react";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";


const Chat = ()=>{
    let { data } = useContext(ChatContext);
     return(
        <div className="chat">
            <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export {Chat};