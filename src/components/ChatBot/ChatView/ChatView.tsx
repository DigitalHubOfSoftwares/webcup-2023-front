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
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-start">
                Hello
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