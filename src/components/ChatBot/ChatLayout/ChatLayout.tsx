import React from "react";

type chatLayoutProps = {
    children: React.ReactNode;
}

const ChatLayout: React.FC<chatLayoutProps> = ({ children }) => {
    return (
        <section className="flex flex-col mx-11 w-full justify-center md:h-screen lg:py-0">
            <div>
                { children }
            </div>
        </section>
    );
}

export default ChatLayout;