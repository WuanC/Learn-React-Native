import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../ultis/constant";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
})

const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    const route : RouteProp<RootStackParamList, 'review-detail'> = useRoute()
    return(
        <View style={{backgroundColor: "#ccc", margin: 10, padding: 10}}>
            <Text style ={styles.review} >Id: {route.params?.id} </Text>
            <Text style ={styles.review}>Title: {route.params?.title} </Text>
            <Text style ={styles.review}>Star {route.params?.star} </Text>
            <Button
                title="view Home"
                onPress={() => navigation.navigate("home")}
            
            />
        </View>
    );
}
export default DetailScreen