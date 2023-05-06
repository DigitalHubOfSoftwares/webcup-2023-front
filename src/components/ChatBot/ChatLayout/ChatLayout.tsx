import React from "react";

type chatLayoutProps = {
    children: React.ReactNode;
}

const ChatLayout: React.FC<chatLayoutProps> = ({ children }) => {
    return (
        <section className="flex flex-col mx-11 w-full justify-center md:h-screen lg:py-0">
            <div className="chat-main-container p-5 backdrop-blur shadow-2xl border-white border-2 rounded-lg ">
                { children }
            </div>
        </section>
    );
}

export default ChatLayout;