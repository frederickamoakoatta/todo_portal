import {createContext, Dispatch, SetStateAction} from "react";

interface ContextProps {
    displayValue: boolean,
    displayFunction: Dispatch<SetStateAction<boolean>>
};

const DevInfoContext = createContext<ContextProps>({displayValue: false, displayFunction: () => {}});

export default DevInfoContext;