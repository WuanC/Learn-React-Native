import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../ultis/constant";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
})

const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    return(
        <View>
            <Text style={styles.review}>detail </Text>
            <Button
                title="view detail"
                onPress={() => navigation.navigate("home")}
            
            />
        </View>
    );
}
export default DetailScreen