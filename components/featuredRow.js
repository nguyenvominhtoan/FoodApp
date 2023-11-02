import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 mt-2">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold" style={{ color: themeColors.text }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaurants.map((resturant) => {
          return (
            <RestaurantCard
              key={resturant._id}
              id={resturant._id}
              imgUrl={resturant.image}
              title={resturant.name}
              rating={resturant.rating}
              type={resturant.type?.name}
              address="123 main street"
              description={resturant.description}
              dishes={resturant.dishes}
              lng={resturant.lng}
              lat={resturant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
