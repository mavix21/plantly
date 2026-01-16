import * as React from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";

import PlantlyButton from "@/components/PlantlyButton";
import PlantlyImage from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantStore";

interface NewPlantProps {
  propName: unknown;
}

export default function NewPlant({ propName }: NewPlantProps) {
  const [name, setName] = React.useState<string>();
  const [days, setDays] = React.useState<string>();
  const addPlant = usePlantStore((s) => s.addPlant);
  const router = useRouter();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    addPlant(name, Number(days));
    router.navigate("../");
  };

  return (
    <KeyboardAwareScrollView
      className="flex-1 bg-white"
      contentContainerClassName="flex-1 pt-8 px-8 pb-16 justify-between"
      keyboardShouldPersistTaps="handled"
    >
      <View className="items-center">
        <PlantlyImage />
      </View>
      <View className="gap-6">
        <View className="gap-2">
          <Text>Name</Text>
          <TextInput
            className="border-light-gray rounded-md border p-3"
            value={name}
            onChangeText={setName}
            placeholder="E.g. Casper the Cactus"
            autoCapitalize="words"
          />
        </View>

        <View className="gap-2">
          <Text>Water Frequency (every x days)</Text>
          <TextInput
            className="border-light-gray rounded-md border p-3"
            value={days}
            onChangeText={setDays}
            placeholder="E.g. 6"
            keyboardType="number-pad"
          />
        </View>
      </View>
      <PlantlyButton title="Add plant" onPress={handleSubmit} textCentered />
    </KeyboardAwareScrollView>
  );
}
