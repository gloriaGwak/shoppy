import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [ user, setUser ] = useState();

    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    );
}

