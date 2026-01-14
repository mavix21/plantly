import * as React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { userStore } from "../store/userStore";

export default function Onboarding() {
  const router = useRouter();
  const handlePress = React.useCallback(() => {
    userStore.trigger.toggle();
    router.replace("/");
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="Let me in!" onPress={handlePress} />
    </View>
  );
}
