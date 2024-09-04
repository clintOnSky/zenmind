import AuthHeader from "@/src/components/header/AuthHeader";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="auth-options"
        options={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          animation: "slide_from_bottom",
          header: () => <AuthHeader />,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          animation: "slide_from_right",
          header: () => <AuthHeader />,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
