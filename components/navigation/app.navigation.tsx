
import HomeScreen from "../reviews/home";
import DetailScreen from "../reviews/detail";
import AboutScreen from "../reviews/about";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
        <Stack.Screen name="home"
         component={HomeScreen} 
         options={{title: 'Overview'}}
         /> 
        <Stack.Screen name="review-detail" component={DetailScreen}/>
      </Stack.Navigator>
    )

}

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home1"
                options={{ title: 'Trang chủ' }}
                component={HomeLayout} />
            <Drawer.Screen
                name="about" component={AboutScreen}
                options={{ title: 'Thông tin' }}
            />
        </Drawer.Navigator>
    )

}
export default AppNavigation