import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="write"
        options={{
          title: "글작성",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add" size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: "게시글",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="list"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
