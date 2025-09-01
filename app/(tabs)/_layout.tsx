import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function TabLayout() {
  const router = useRouter();

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
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Tabs.Screen
        name="write"
        options={{
          title: "글작성",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add" size={24} color={focused ? "black" : "gray"} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
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
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
        listeners={{
          // 탭을 눌렀을 때의 동작을 정의
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/(tabs)/posts/page");
          },
        }}
      />
    </Tabs>
  );
}
