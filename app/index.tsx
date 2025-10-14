import HomePage from "@/components/home-page";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomePage />

      {/* ✅ Link now points to the real route */}
      <Link href="/subscription" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#2563eb",
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 8,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Go to Subscription Page
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
