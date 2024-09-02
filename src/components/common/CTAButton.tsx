import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import Colors from "@/constants/Colors";
import DBTouchableOpacity from "./DBTouchableOpacity";

interface Props {
  google?: boolean;
  label?: string;
}

const CTAButton = ({ google, label }: Props) => {
  return (
    <DBTouchableOpacity
      onPress={() => {
        google
          ? console.log("Trying to sign in to Google")
          : console.log("Pressed CTA Button");
      }}
      style={styles.container}
      debounce
    >
      <View style={styles.iconView}>
        {google ? <Ionicons name="logo-google" size={Sizes[24]} /> : null}
      </View>
      <Text style={styles.label}>
        {google ? "Continue with Google" : label || ""}
      </Text>
    </DBTouchableOpacity>
  );
};

export default CTAButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 30,
    gap: 36,
    backgroundColor: Colors.offWhite,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  iconView: {
    position: "absolute",
    left: 30,
  },
  label: {
    fontFamily: Fonts.DMSans_Medium,
    fontSize: Sizes[20],
  },
});
