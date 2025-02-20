import { NavLink } from "react-router-dom";

interface TabsProps {
    tab1: string;
    tab2: string;
}

const Tabs = ({tab1, tab2} : TabsProps) => {
    return (
        <div className="mx-auto my-10 pt-5 bg-gray-50">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-300">
                <NavLink to={tab1.toLowerCase()} className={({ isActive }) =>
                        `flex-1 text-center py-2 px-4 font-medium ${
                            isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
                        }`
                    }
                >
                    {tab1}
                </NavLink>
                <NavLink
                    to={tab2.toLowerCase()}
                    className={({ isActive }) =>
                        `flex-1 text-center py-2 px-4 font-medium ${
                            isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
                        }`
                    }
                >
                    {tab2}
                </NavLink>
            </div>
        </div>
    );
};

export default Tabs;
