import React from "react";

interface BadgeProps {
    status: boolean;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
    const statusClasses = {
        success: "bg-green-100 text-green-700 border-green-500",
        pending: "bg-yellow-100 text-yellow-700 border-yellow-500",
    };

    return (
        <span className={`px-2 py-1 text-sm font-semibold border rounded-full ${status ? statusClasses.success : statusClasses.pending}`}>
      {status ? "Completed" : "Pending"}
    </span>
    );
};

export default Badge;
