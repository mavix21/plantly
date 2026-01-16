import { Text, View } from "react-native";

import { PlantType } from "@/store/plantStore";

import PlantlyImage from "./PlantlyImage";

export function PlantCard({ plant }: { plant: PlantType }) {
  return (
    <View className="mb-3 flex-row rounded-md bg-white p-3 shadow-md">
      <PlantlyImage imageUri={plant.imageUri} size={100} />
      <View className="justify-center p-3.5">
        <Text numberOfLines={1} className="mb-1 text-lg">
          {plant.name}
        </Text>
        <Text className="text-gray-700">
          Water every {plant.wateringFrequencyDays} days
        </Text>
      </View>
    </View>
  );
}
