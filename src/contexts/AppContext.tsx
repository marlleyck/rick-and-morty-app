import { createContext, ReactNode, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { api } from '../services/api';
import { CharacterType } from "../types";

type AppContextType = {
    character: CharacterType | undefined;
    setCharacter: (newState: CharacterType) => void;
    setCharacterName: (newState: string) => void;
    isLoading: boolean;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [character, setCharacter] = useState<CharacterType>()
    const [characterName, setCharacterName] = useState('rick sanchez')
    

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await api.get(`/character/?name=${characterName}`)
            setIsLoading(false)
            setCharacter(data.results[0])
            Keyboard.dismiss()

            console.log('-------------------------')
            console.log(data.results[0])
            
        }

        fetchApi()
    }, [characterName])

    return (
        <AppContext.Provider value={{character, setCharacter, setCharacterName, isLoading}}>
            {children}
        </AppContext.Provider>
    );
}



