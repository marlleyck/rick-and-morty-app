import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from '../services/api';
import { CharacterType } from "../types";

type AppContextType = {
    character: CharacterType | undefined;
    setCharacter: (newState: CharacterType) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [character, setCharacter] = useState<CharacterType>()
    

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await api.get('/character/1')
            setCharacter(data)

            console.log('-------------------- SEPARAÇÃO ---------------------')

            console.log(data)
        }

        fetchApi()
    }, [])

    return (
        <AppContext.Provider value={{character, setCharacter}}>
            {children}
        </AppContext.Provider>
    );
}



