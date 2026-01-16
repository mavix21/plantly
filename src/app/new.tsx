import * as React from "react";
import {
  Alert,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import PlantlyButton from "@/components/PlantlyButton";
import PlantlyImage from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantStore";

interface NewPlantProps {
  propName: unknown;
}

export default function NewPlant({ propName }: NewPlantProps) {
  const [imageUri, setImageUri] = React.useState<string | undefined>(undefined);
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

    addPlant(name, Number(days), imageUri);
    router.navigate("../");
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0]);
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      className="flex-1 bg-white"
      contentContainerClassName="flex-1 pt-8 px-8 pb-16 justify-between"
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        activeOpacity={0.8}
        className="items-center"
        onPress={handleChooseImage}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
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
