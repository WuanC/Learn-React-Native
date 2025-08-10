import { StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../ultis/constant";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
})

const DetailScreen = () => {
    return(
        <View>
            <Text style={styles.review}>detail </Text>
        </View>
    );
}
export default DetailScreen