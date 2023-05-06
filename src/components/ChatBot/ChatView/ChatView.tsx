import React from "react";
import Link from "next/link";
import ChatText from "../ChatText/ChatText";

interface props{
    data?: any;
}


const ChatView: React.FC<props> = ({data}) => {

    return (
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        { data.map((data : any) => {
            return (
                <ChatText fromChatBot={data.from} toChatBot={data.to}/>
            );
        })}
            
        </div>
    );
}

export default ChatView;