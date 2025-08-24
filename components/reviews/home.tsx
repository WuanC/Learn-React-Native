import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {

    const navigation : NavigationProp<RootStackParamList> = useNavigation()

    return(
        <View>
            <Text style = {{paddingTop: 20}}>home </Text>
            <Button 
                title="View Detail"
                onPress={() => navigation.navigate("review-detail")} 
            />
        </View>
    );
}
export default HomeScreen