import React from "react";

interface ChatTextProps {
    fromChatBot?: string;
    toChatBot?: string;
}

const ChatText: React.FC<ChatTextProps> = ({ fromChatBot, toChatBot }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-start">
                { fromChatBot }
            </div>
            <div className="flex w-full justify-end">
                { toChatBot }
            </div>
        </div>
    );
}

export default ChatText;