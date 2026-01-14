import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="bg-background flex-1 items-center justify-center px-8">
      {/* Heading */}
      <Text className="mb-3 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
        🚀 Welcome
      </Text>

      {/* Subheading */}
      <Text className="mb-8 text-center text-xl leading-relaxed text-gray-700 dark:text-white">
        Build beautiful apps with{" "}
        <Text className="font-semibold text-blue-500">
          Expo (Router) + Uniwind 🔥
        </Text>
      </Text>

      {/* Instruction text */}
      <Text className="max-w-sm text-center text-base text-gray-600 dark:text-white">
        Start customizing your app by editing{" "}
        <Text className="font-semibold text-gray-800 dark:text-white">
          app/index.tsx
        </Text>
      </Text>

      <StatusBar style="dark" />
    </View>
  );
}
