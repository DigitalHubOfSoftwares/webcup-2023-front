import React, {useEffect, useState} from "react";
import InputComponent from "./InputComponent/InputComponent";
import ChatLayout from "./ChatLayout/ChatLayout";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatView from "./ChatView/ChatView";
type Prediction = {
    request: string,
    response: string
}
const ChatBot = () => {

    const [predictions, setPredictions] = useState<Prediction[]>([]);

    const handleSubmit = (prediction: any) => {
        console.log(prediction);
        let predictionToChat : Prediction = {
            request: prediction.userRequest,
            response: prediction.description
        }
        console.log(predictionToChat);
        setPredictions([...predictions, predictionToChat]);
        console.log(predictions)
    }

    const chatTexts = [
        {
            response: "Hello, How Are you?",
            request: "Im Fine."
        },
        {
            response: "Ask Me Anything?",
            request: "What are you?"
        },
        {
            response: "Hello, How Are you?",
            request: "Im Fine."
        },
    ];

    return (
        <ChatLayout>
            {JSON.stringify(predictions)}
            <ChatHeader/>
            <div className="w-full my-7">
                <ChatView data={predictions}/>
            </div>
            <InputComponent handleSubmit={handleSubmit} />
        </ChatLayout>  
    );
}

export default ChatBot;