import React, { useEffect,useContext, createContext } from "react";
import { SideBar } from "../components/SideBar";
import { Chat } from "../components/Chat";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

const Home  = ()=>{
    return(
        <div className="home">
            <div className="container">
                <SideBar />
                <Chat />
            </div>
        </div>
    )
}

export {Home};