import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../ultis/constant";

const AboutScreen = () => {
    return(
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>about </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    about: {
        fontSize: 30
    }
})

export default AboutScreen