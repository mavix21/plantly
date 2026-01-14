import * as React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCSSVariable, withUniwind } from "uniwind";

import PlantlyImage from "@/components/PlantlyImage";

import PlantlyButton from "../components/PlantlyButton";
import { useUserStore } from "../store/userStore";

const StyledLinearGradient = withUniwind(LinearGradient);

export default function Onboarding() {
  const toggle = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();

  const [colorGreen, colorAppleGreen, colorLimeGreen] = useCSSVariable([
    "--color-primary",
    "--color-apple-green",
    "--color-lime-green",
  ]) as string[];

  const handlePress = React.useCallback(() => {
    toggle();
    router.replace("/");
  }, [toggle, router]);

  return (
    <StyledLinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colorGreen, colorAppleGreen, colorLimeGreen]}
      className="flex-1 items-center justify-evenly"
    >
      <StatusBar style="light" />
      <View>
        <Text className="mb-4 text-center text-4xl font-bold text-white">
          Plantly
        </Text>
        <Text className="text-center text-lg text-white/80">
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in!" onPress={handlePress} />
    </StyledLinearGradient>
  );
}
