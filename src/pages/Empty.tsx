import emptyImg from "../assets/empty.png";

interface EmptyProps {
    message: string;
}

const EmptyPage = ({message} : EmptyProps) => {

    return (
        <div className="flex flex-col items-center justify-center py-30">
            <img src={emptyImg} alt="Empty State" className="w-30 h-30"/>
            <h5 className="text-4xl font-bold text-gray-800 mb-6 mt-4">No results</h5>
            <p className="text-lg text-gray-600">{message}</p>
        </div>
    );
};

export default EmptyPage;
