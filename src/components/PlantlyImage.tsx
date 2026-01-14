import { Image, useWindowDimensions } from "react-native";

export default function PlantlyImage() {
  const { width } = useWindowDimensions();

  const imageSize = width / 1.5;

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
