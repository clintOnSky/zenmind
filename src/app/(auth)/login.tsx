import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import FormInput from "@/src/components/common/FormInput";
import { useForm } from "react-hook-form";
import { InputType } from "@/utils/enums/input";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import CTAButton from "@/src/components/common/CTAButton";
import { emailRegex } from "@/utils/regex";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = (data: FormData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Email Address</Text>
            <FormInput
              name="email"
              control={control}
              type={InputType.EMAIL}
              rules={{
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Email address is invalid",
                },
              }}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <FormInput
              name="password"
              control={control}
              type={InputType.PASSWORD}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <CTAButton label="Sign In" onPress={handleSubmit(handleSignIn)} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  content: {
    paddingTop: 60,
    paddingBottom: 100,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  field: {
    gap: 4,
  },
  label: {
    fontFamily: Fonts.DMSans_Regular,
    fontSize: Sizes[16],
    lineHeight: Sizes[18],
    color: Colors.white,
  },
  buttonView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 20,
    justifyContent: "flex-end",
  },
});
