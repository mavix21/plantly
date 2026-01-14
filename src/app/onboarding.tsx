import * as React from "react";
import { Button, View } from "react-native";
import { useRouter } from "expo-router";

import { useUserStore } from "../store/userStore";

export default function Onboarding() {
  const toggle = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();

  const handlePress = React.useCallback(() => {
    toggle();
    router.replace("/");
  }, [toggle, router]);

  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Button title="Let me in!" onPress={handlePress} />
    </View>
  );
}
