import React, {useState} from 'react';
import Lottie from "lottie-react";
import todoAnimation from "../assets/todo-animation-2.json";
import Button from "../components/Button.tsx";
import {useAuth} from "react-oidc-context";

const Landing: React.FC = () => {
    const auth = useAuth();
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const getStarted = async () => {
        setIsDisabled(true);
        await auth.signinRedirect();
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col justify-center items-center text-center">
                <Lottie animationData={todoAnimation} loop={false} alt="todo lottie animation" className="h-30 w-30"/>
                <h1 className="text-4xl font-bold text-gray-800 mb-6">My Todo Portal</h1>
                <p className="text-lg text-gray-600 mb-8">Get free <code>/api/todo</code> REST endpoints to build your first CRUD app.</p>
                <Button className="w-full" size={'lg'} variant={'primary'} onClick={getStarted} disabled={isDisabled}>{isDisabled ? `Please wait` : `Get Started`}</Button>
            </div>
        </div>
    );
};

export default Landing;
