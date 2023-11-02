import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import homeScreens from "./screens/HomeScreens";
import restaurantScreens from "./screens/RestaurantScreens";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreens} />
        <Stack.Screen name="Restaurant" component={restaurantScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
