import { Stack } from "expo-router";




export default function Subscription() {
  return (
    <div>
      {/* ✅ Adds navigation header and back button automatically */}
      <Stack.Screen
        options={{
          title: "Subscription",
          headerShown: true,
        }}
      />
      </div>
  );
}