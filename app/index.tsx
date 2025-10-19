import HomePage from "@/components/home-page";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomePage />
      
      <Link href="/subscription">

        <Text style={{ color: "Black", fontSize: 16, fontWeight: "600" }}>
            Go to Subscription Page
          </Text>
      </Link>
      <Link href="/profile">

        <Text style={{ color: "red", fontSize: 16, fontWeight: "600" }}>
            Go to the Profile Page
          </Text>
      </Link>
    </View>
  );
}
