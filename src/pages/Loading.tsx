import Lottie from "lottie-react";
import loadingAnimation from "../assets/loader.json";

interface LoadingProps {
    fullPage: boolean;
}

const Loading = ({fullPage} : LoadingProps) => {

    return (
        <div className={`flex items-center justify-center ${fullPage && 'h-screen'}`}>
                <Lottie animationData={loadingAnimation} loop={true} alt="loading lottie animation" className="h-30 w-30"/>
        </div>
    );
};

export default Loading;
