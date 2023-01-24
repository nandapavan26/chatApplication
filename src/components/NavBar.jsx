import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


const NavBar = ()=>{

    const {currentUser} = useContext(AuthContext);
    const Logout = async ()=>{
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