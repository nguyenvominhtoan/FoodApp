import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-web";
import { themeColors } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function RestaurantScreens() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  console.log("restaurant", item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={require("../assets/images/pizzaDish.png")}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
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
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
