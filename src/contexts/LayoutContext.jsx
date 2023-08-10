import { createContext, useState } from "react";

const LayoutContext = createContext();
const { Provider } = LayoutContext;

const LayoutProvider = ({ children }) => {
    const [simple, setSimple] = useState(false);
    return <Provider value={{ simple, setSimple }}>{children}</Provider>;
};

export { LayoutContext, LayoutProvider };
