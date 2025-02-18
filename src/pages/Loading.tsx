import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";


const Loading: React.FC = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
                <Lottie animationData={loadingAnimation} loop={true} alt="loading lottie animation" className="h-30 w-30"/>
        </div>
    );
};

export default Loading;
