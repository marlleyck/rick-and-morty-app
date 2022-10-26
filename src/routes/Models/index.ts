import { LocationType } from './../../types/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type PropsNavigationStack = {
    StackHome: undefined;
    Home: undefined;
    Locais: undefined;
    LocationDetails: {
        itemPressed: LocationType;
    };
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;