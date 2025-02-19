import errorImg from "../assets/error.svg";

interface ErrorProps {
    message: string;
}

const ErrorPage = ({message} : ErrorProps) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <img src={errorImg} alt="Error State" className="w-100 h-100"/>
            <h4 className="text-4xl font-bold text-gray-800 mb-6">Error</h4>
            <p className="text-lg text-gray-600 mb-8">{message}</p>
        </div>
    );
};

export default ErrorPage;
