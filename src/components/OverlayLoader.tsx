import React from "react";
import { ClipLoader } from "react-spinners";

interface OverlayLoaderProps {
    loading: boolean;
    children: React.ReactNode;
}

const OverlayLoader: React.FC<OverlayLoaderProps> = ({ loading, children }) => {
    return (
        <div className="relative">
            {/* Render children content */}
            {children}

            {/* Show overlay only when loading */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-50">
                    <ClipLoader color="#ffffff" size={50} />
                </div>
            )}
        </div>
    );
};

export default OverlayLoader;
