import { Home } from "./src/screens/Home";
import { AppContextProvider } from "./src/contexts/AppContext";
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}