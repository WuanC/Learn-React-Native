
import { Text, View } from "react-native";


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./ultis/constant";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import AppNavigation from "./components/navigation/app.navigation";

SplashScreen.preventAutoHideAsync();
const App = () => {
        const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }
    return (
    <NavigationContainer>
        <AppNavigation/>
    </NavigationContainer>
        
    );
}
export default App;