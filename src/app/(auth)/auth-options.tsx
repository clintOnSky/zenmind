import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import CTAButton from "@/src/components/common/CTAButton";
import NavButton from "@/src/components/common/NavButton";
import DBTouchableOpacity from "@/src/components/common/DBTouchableOpacity";
import Sizes from "@/constants/Sizes";
import { Link, router } from "expo-router";

const AuthOptionsScreen = () => {
  return (
    <ImageBackground
      source={require("@assets/images/auth-option-bg.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(250, 191, 135, 0.3)", Colors.dark]}
        locations={[0, 0.9]}
        style={styles.gradient}
      />
      <View style={styles.bottomView}>
        <View style={styles.authOptionView}>
          <CTAButton google />
          <NavButton email type="secondary" href={"/signup"} />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <DBTouchableOpacity onPress={() => router.push("/login")}>
            <Text
              style={[styles.loginText, { textDecorationLine: "underline" }]}
            >
              Sign in
            </Text>
          </DBTouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  bottomView: {
    backgroundColor: Colors.dark,
    paddingBottom: 41,
  },
  authOptionView: {
    gap: 20,
  },
  loginView: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 3,
    marginTop: 30,
  },
  loginText: {
    fontSize: Sizes[15],
    color: Colors.offWhite,
  },
});
