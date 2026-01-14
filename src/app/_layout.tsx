import { Uniwind } from "uniwind";

import "../global.css";

import { Stack } from "expo-router";

export default function Layout() {
  Uniwind.setTheme("light");
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}
