import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Lora_Regular: require("@assets/fonts/Lora-Regular.ttf"),
    Lora_Medium: require("@assets/fonts/Lora-Medium.ttf"),
    Lora_SemiBold: require("@assets/fonts/Lora-SemiBold.ttf"),
    Lora_Bold: require("@assets/fonts/Lora-Bold.ttf"),
    DMSans_Regular: require("@assets/fonts/DMSans-Regular.ttf"),
    DMSans_Medium: require("@assets/fonts/DMSans-Medium.ttf"),
    DMSans_SemiBold: require("@assets/fonts/DMSans-SemiBold.ttf"),
    DMSans_Bold: require("@assets/fonts/DMSans-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="(onboarding)/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(onboarding)/welcome"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
