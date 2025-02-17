import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    variant?: "primary" | "secondary" | "danger" | "success";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
};

const baseStyles = "flex items-center justify-center font-medium rounded-full transition duration-300 focus:outline-none focus:ring";

const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
};

const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant = "primary", size = "md", disabled = false, className = ""}) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
