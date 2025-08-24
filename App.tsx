
import { Text, View } from "react-native";
import HomeScreen from "./components/reviews/home";
import DetailScreen from "./components/reviews/detail";
import AboutScreen from "./components/reviews/about";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./ultis/constant";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<RootStackParamList>();
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
      <Stack.Navigator>
        <Stack.Screen name="home"
         component={HomeScreen} 
         options={{title: 'Overview'}}
         /> 
        <Stack.Screen name="review-detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
        
    );
}
export default App;