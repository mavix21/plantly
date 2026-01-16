import { FlatList, View } from "react-native";
import { useRouter } from "expo-router";

import { PlantCard } from "@/components/PlantCard";
import PlantlyButton from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantStore";

export default function App() {
  const plants = usePlantStore((s) => s.plants);
  const router = useRouter();

  return (
    <FlatList
      className="bg-background flex-1 pb-24"
      contentContainerClassName="p-4"
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center">
          <PlantlyButton
            title="Add your first plant"
            onPress={() => router.navigate("/new")}
            textCentered
          />
        </View>
      }
    />
  );
}
