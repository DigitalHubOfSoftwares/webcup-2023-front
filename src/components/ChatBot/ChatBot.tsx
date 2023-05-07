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
    const [predicted, setPredicted] = useState<boolean>(false);
    const [currentPrediction, setCurrentPrediction] = useState<any>(false);

    const handleSubmit = (prediction: any) => {
        console.log(prediction);
        setCurrentPrediction(prediction);
        let predictionToChat : Prediction = {
            request: prediction.userRequest,
            response: prediction.description
        }
        console.log(predictionToChat);
        setPredictions([...predictions, predictionToChat]);
        setPredicted(true);
        console.log(predictions)
    }

    const resetChatbot = () => {
        setPredicted(false);
        setPredictions([]);
    }

    const sendDetailedReport = () => {

    }

    return (
        <ChatLayout>
            <div className="text-center">
            Welcome to Onirix, the revolutionary artificial intelligence system that can predict your future based on your dreams! Our state-of-the-art technology is the result of years of research and development by the International Dreams Institute, a leading organization in the field of dream studies.
            </div>
            <ChatHeader/>
            <div className="w-full my-7">
                <ChatView data={predictions}/>
            </div>
            <InputComponent handleSubmit={handleSubmit} />

            {
                predicted == true ?
                <div>
                    <button onClick={resetChatbot}>Make another prediction</button>
                    <button onClick={sendDetailedReport}>Send detailed report</button>
                </div>
                :
                <></>
            }
        </ChatLayout>  
    );
}

export default ChatBot;