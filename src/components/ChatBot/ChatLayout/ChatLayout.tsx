import React from "react";

type chatLayoutProps = {
    children: React.ReactNode;
}

const ChatLayout: React.FC<chatLayoutProps> = ({ children }) => {
    return (
        <section className="flex flex-col my-4 sm:mx-1 lg:mx-80 w-full items-center justify-center md:h-screen">
            <span className="text-3xl my-2 font-bold">Onirix</span>
            <div className="chat-main-container p-5 backdrop-blur shadow-2xl border-white border-2 rounded-lg ">
                { children }
            </div>
        </section>
    );
}

export default ChatLayout;