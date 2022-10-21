import { createContext, ReactNode, useEffect, useState } from "react";
import { Keyboard } from "react-native";

import { api } from '../services/api';

import { CharacterType, LocationType } from "../types";

type AppContextType = {
    character: CharacterType | undefined;
    setCharacter: (newState: CharacterType) => void;
    setCharacterName: (newState: string) => void;
    isLoading: boolean;
    charactersList: LocationType[] | undefined;
    setCharactersList: (newState: LocationType[]) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<CharacterType>()
    const [charactersList, setCharactersList] = useState<LocationType[]>()
    const [characterName, setCharacterName] = useState('rick sanchez')
    

    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true)
            const {data} = await api.get(`/character/?name=${characterName}`)
            setIsLoading(false)
            setCharacter(data.results[0])
            Keyboard.dismiss()

            // console.log('-------------------------')
            // console.log(data.results[0]) 
            
        }

        fetchCharacters()
    }, [])

    useEffect(() => {
        const fetchLocations = async () => {
            const {data} = await api.get('/location')
            // console.log('----------0-0-0-0-0-0-0-0-0-0-0-')
            // console.log(data.results)
            setCharactersList(data.results)
        }

        fetchLocations()
    }, [])

    return (
        <AppContext.Provider 
        value={{character, setCharacter, setCharacterName, isLoading, 
            charactersList, setCharactersList}}>
            {children}
        </AppContext.Provider>
    );
}



