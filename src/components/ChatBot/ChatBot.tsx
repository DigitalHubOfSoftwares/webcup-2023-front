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
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [predicted, setPredicted] = useState<boolean>(false);
    const [currentPrediction, setCurrentPrediction] = useState<any>(false);

    const handleDarkModeToggle = () => {
        console.log("toggle DarkMode" + isDarkMode);
        if (isDarkMode == false) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-mode', 'dark');
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-mode', 'light');
          setIsDarkMode(false);
        }
    }

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
            <ChatHeader/>
            <div className="w-full my-7">
                <ChatView data={predictions}/>
            </div>
            <InputComponent handleSubmit={handleSubmit} />

            <button onClick={handleDarkModeToggle}>Toggle</button>
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