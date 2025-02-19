import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "./Button.tsx";

interface CodeCardProps {
    name: string;
    value: string;
}

const CodeCard: React.FC<CodeCardProps> = ({ name, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="bg-white shadow-sm rounded-lg p-4 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-700 font-semibold">{name}</h3>
                <Button size="sm" onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</Button>
            </div>

            {/* Code Block */}
            <div className="rounded-md overflow-hidden border px-2 border-gray-300">
                <SyntaxHighlighter language="json" style={dracula} customStyle={{ padding: "10px" }}>
                    {value}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeCard;
