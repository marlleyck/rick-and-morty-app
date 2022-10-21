import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AppContextProvider } from "./src/contexts/AppContext";
import { Home } from "./src/screens/Home";
import { useFonts, Roboto_500Medium, Roboto_700Bold, Roboto_300Light } from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppContextProvider>
        {/* <Home /> */}
        <Routes />
      </AppContextProvider>
    </NavigationContainer>
  );
}