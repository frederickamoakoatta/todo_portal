import {useContext} from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import DevInfoContext from "../context/DevInfoContext.ts";


const WelcomeCard = () => {
    const {displayFunction} = useContext(DevInfoContext);

    return (
        <div className="flex items-center justify-center">
            <div className="relative bg-white shadow-lg w-full rounded-2xl p-6 text-center border border-gray-200">
                {/* Close Button */}
                <IoIosCloseCircleOutline size={30} onClick={() => displayFunction(false)}
                                         className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-700"/>

                {/* Emoji & Heading */}
                <div className="text-4xl mb-4">👋</div>
                <h2 className="text-xl font-semibold text-gray-900">
                    Hello Frontend Devs,
                </h2>
                <p className="text-gray-600 mt-2">
                    Welcome to <span className="font-bold">Todo Portal</span>. Gain access
                    to CRUD APIs for a simple todo project.
                </p>
                <p className="text-gray-600 mt-2">
                    I hope this will be a resource worth using. Thanks!
                </p>

                {/* Documentation Link */}
                <p className="mt-4">
                    <a
                        href="https://documenter.getpostman.com/view/14396709/2sAYdcrXVG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Click this link to access documentation on TODO APIs.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default WelcomeCard;
