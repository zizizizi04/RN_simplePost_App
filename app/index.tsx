import ProtectedRoute from "@/components/ProtectedRoute";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <ProtectedRoute>
      <Redirect
        href={{
          pathname: "/(tabs)/home",
        }}
      />
    </ProtectedRoute>
  );
}
