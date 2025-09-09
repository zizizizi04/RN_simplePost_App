import { Stack, useLocalSearchParams } from "expo-router";

export default function PostLayout() {
  const { postId } = useLocalSearchParams();

  return <Stack screenOptions={{ headerShown: false }} />;
}
