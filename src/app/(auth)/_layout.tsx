import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="auth-options"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={
          {
            // headerShown: false,
          }
        }
      />
    </Stack>
  );
};

export default AuthLayout;
