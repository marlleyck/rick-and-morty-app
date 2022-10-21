export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
}

export type LocationType = {
    id: number;
    name: string;
    dimension: string;
    residents: string[];
    type: string;
}