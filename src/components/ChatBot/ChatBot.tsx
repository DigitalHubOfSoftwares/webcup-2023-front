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
                <div className="flex my-7">
                    <button onClick={resetChatbot} className="text-black mx-2 font-medium rounded-lg transition-all ease-in-out bg-[#FFA500] hover:bg-[#FFA500]/[.6] hover:rounded-3xl text-sm px-5 py-2.5 flex justify-center items-center">Make another prediction</button>
                    <button onClick={sendDetailedReport} className="text-black mx-2 font-medium rounded-lg transition-all ease-in-out bg-teal-300 hover:bg-teal-300/[.6] hover:rounded-3xl text-sm px-5 py-2.5 flex justify-center items-center">Email Me a detailed Report</button>
                </div>
                :
                <></>
            }
        </ChatLayout>  
    );
}

export default ChatBot;