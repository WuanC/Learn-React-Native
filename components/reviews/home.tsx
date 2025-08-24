import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../ultis/constant";

interface IReview{
    id: number;
    title: string,
    star: number,
}


const HomeScreen = () => {  
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: "ReactNative", star: 5},
        {id:2, title: "ReactNative2", star: 3},

    ])
    return(
        <View>
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id + ""}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            onPress={() => navigation.navigate("review-detail", item)} 
                        >
                            <View style= {[styles.reviewItem]}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    reviewItem: {
        backgroundColor: "#ccc",
        padding: 10,
        margin: 10,
    }
})
export default HomeScreen