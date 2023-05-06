import React, {useEffect, useState} from "react";
import InputComponent from "./InputComponent/InputComponent";
import ChatLayout from "./ChatLayout/ChatLayout";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatView from "./ChatView/ChatView";

const ChatBot = () => {

    const [data, setData] = useState<any>([]);

    const handleSubmit = (data: any) => {
        console.log("INmom");
        setData(data);
    }

    useEffect(() => {
        console.log("Send")
        console.log(data);
    }, []);

    const chatTexts = [
        {
            from: "Hello, How Are you?",
            to: "Im Fine."
        },
        {
            from: "Ask Me Anything?",
            to: "What are you?"
        },
        {
            from: "Hello, How Are you?",
            to: "Im Fine."
        },
    ];

    return (
        <ChatLayout>
            {JSON.stringify(data)}
            <ChatHeader/>
            <div className="w-full my-7">
                <ChatView data={chatTexts}/>
            </div>
            <InputComponent handleSubmit={handleSubmit} />
        </ChatLayout>  
    );
}

export default ChatBot;