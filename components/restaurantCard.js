import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={require("../assets/images/pizzaDish.png")}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">Pizza</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">4</Text>
              <Text className="text-gray-700">(4.4k reviews )</Text>
              <Text className="font-semibold"> &#x2022; Fast food</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-gray-700 text-xs">434 second street</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
