import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Cookies from "universal-cookie";
import { ChatContext } from "../context/ChatContext";

const cookies = new Cookies();
const NavBar = ()=>{
    let {data,dispatch} = useContext(ChatContext);
    const {currentUser} = useContext(AuthContext);
    const Logout = async ()=>{
        dispatch({ type: "CHANGE_USER", payload:{
            user:{},
            chatId:null
        } });
        await signOut(auth);
    }

    return(
        <div className="navbar">
            <span className="logo">Web Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}

export {NavBar};