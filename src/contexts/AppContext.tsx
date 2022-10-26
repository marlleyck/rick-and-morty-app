import { createContext, ReactNode, useEffect, useState } from "react";
import { Keyboard } from "react-native";

import { api } from '../services/api';

import { CharacterType, LocationType } from "../types";

type AppContextType = {
    character: CharacterType | undefined;
    setCharacter: (newState: CharacterType) => void;
    setCharacterName: (newState: string) => void;
    isLoading: boolean;
    locationList: LocationType[] | undefined;
    setLocationList: (newState: LocationType[]) => void;
    goToNextPage: () => void;
    goToPrevPage: () => void;    
    location: number;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<CharacterType>()
    const [location, setLocation] = useState(1)
    const [locationList, setLocationList] = useState<LocationType[]>()
    const [characterName, setCharacterName] = useState('rick sanchez')
    const [prevPage, setPrevPage] = useState('')
    const [nextPage, setNextPage] = useState('')
    

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
    }, [characterName])

    useEffect(() => {
        const fetchLocations = async () => {
            const {data} = await api.get(`/location?page=${String(location)}`)
            // console.log('----------0-0-0-0-0-0-0-0-0-0-0-')
            // console.log(data)
            setPrevPage(data.info.prev)
            setNextPage(data.info.next)
            setLocationList(data.results)
        }

        fetchLocations()
    }, [location])

    const goToNextPage = async () => {
        if (location < 7) {
            setLocation((state) => state + 1)
        } else if (location == 7) {
            setLocation(1)
        }
    }

    const goToPrevPage = async () => {
        if (location > 1) {
            setLocation((state) => state - 1)
        } else if (location == 1) {
            setLocation(7)
        }
    }

    
    return (
        <AppContext.Provider 
        value={{character, setCharacter, setCharacterName, isLoading, 
            locationList, setLocationList, goToNextPage, goToPrevPage, location}}>
            {children}
        </AppContext.Provider>
    );
}



