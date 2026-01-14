import React from "react";
import { Pressable, Text } from "react-native";
import * as Haptics from "expo-haptics";

interface PlantlyButtonProps {
  title: string;
  onPress: () => void;
}

export default function PlantlyButton({ title, onPress }: PlantlyButtonProps) {
  const handlePress = React.useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  }, [onPress]);

  return (
    <Pressable
      className="bg-primary active:bg-secondary rounded-md px-4.5 py-3 transition-colors"
      onPress={handlePress}
    >
      <Text className="text-lg font-bold text-white">{title}</Text>
    </Pressable>
  );
}
