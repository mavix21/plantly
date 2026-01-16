import { Uniwind } from "uniwind";

import "../global.css";

import { Stack } from "expo-router";

export default function Layout() {
  Uniwind.setTheme("light");
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: "New plant",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
