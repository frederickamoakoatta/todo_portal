import {useState} from "react";
import logo from "../assets/Freddylogo.svg"
import userAvatar from "../assets/user-avatar.json"
import Lottie from "lottie-react";
import {useAuth} from "react-oidc-context";



const Header = () => {
    const [isCollasped, setIsCollasped] = useState<boolean>(false);
    const auth = useAuth();

    const logout = async () => {
        window.location.href = '/'
        await auth.removeUser();
    }


    return (
        <>
            <header className="w-full fixed sticky-top bg-white shadow-md px-20 py-5 flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-10 w-auto"/>

                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsCollasped(!isCollasped)}>
                    <Lottie animationData={userAvatar} loop={true} alt="user avatar"
                            className="h-10 w-10 p-1 rounded-full border border-gray-200"/>
                    <span className="text-gray-700 font-medium hidden sm:block">{auth?.user?.profile.email}</span>
                </div>
            </header>
            {
                isCollasped &&
                <div className="absolute right-20 mt-20 w-48 bg-white border-1 border-gray-200 rounded-lg shadow-lg z-10">
                    <ul>
                        <li>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        </li>
                        <li className="cursor-pointer" onClick={() => logout()}>
                            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
};

export default Header;
