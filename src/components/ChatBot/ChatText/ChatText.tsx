import React from "react";

interface ChatTextProps {
    fromChatBot?: string;
    toChatBot?: string;
}

const ChatText: React.FC<ChatTextProps> = ({ fromChatBot, toChatBot }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-end">
                <span className="px-3 py-1 text-black shadow-lg rounded-full bg-teal-400/[.3] dark:text-white">{ toChatBot }</span>
            </div>
            <div className="flex w-full justify-start">
                <span className="px-3 py-1 bg-primary-300/[.3] shadow-lg text-black rounded-full dark:text-white">{ fromChatBot }</span>
            </div>
        </div>
    );
}

export default ChatText;