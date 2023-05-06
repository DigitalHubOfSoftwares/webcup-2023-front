import Link from "next/link";
import ChatText from "../ChatText/ChatText";
import React, {useEffect, useState} from "react";

type Prediction = {
    request: string,
    response: string
}

interface props{
    data?: any;
}


const ChatView: React.FC<props> = ({data}) => {
    const [dataPrediction, setDataPrediction] = useState<Prediction[]>(data)

    return (
        <div className="w-full p-6 shadow-lg border border-gray-200 rounded-lg dark: dark:border-gray-700">
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-start">
                <span className="px-3 py-1 bg-primary-300/[.3] shadow-lg text-black rounded-full dark:text-white">Hello</span>
            </div>
        </div>
        { data.map((data : any, index : any) => {
            return (
                <ChatText key={index} fromChatBot={data.response} toChatBot={data.request}/>
            );
        })}
            
        </div>
    );
}

export default ChatView;