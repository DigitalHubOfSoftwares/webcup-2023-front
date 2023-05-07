import React from "react";

interface ChatTextProps {
    fromChatBot?: string;
    toChatBot?: string;
}

const ChatText: React.FC<ChatTextProps> = ({ fromChatBot, toChatBot }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-end bg-teal-400/[.3] my-2 px-3 rounded-full">
                <span className="px-3 py-1 text-black shadow-lg rounded-full  dark:text-white">{ toChatBot }</span>
            </div>
            <div className="flex w-full justify-start bg-primary-300/[.3] my-2 px-3 rounded-full">
                <span className="px-3 py-1 shadow-lg text-black rounded-full dark:text-white">{ fromChatBot }</span>
            </div>
        </div>
    );
}

export default ChatText;