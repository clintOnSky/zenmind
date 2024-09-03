import { StyleSheet, Text } from "react-native";
import React from "react";
import Sizes from "@/constants/Sizes";
import { FieldErrors } from "react-hook-form";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";

type Props = {
  error?: string;
  successMessage?: string;
};

const ValidationMessage = ({ error, successMessage }: Props) => {
  if (!error && !successMessage) return null;
  console.log("🚀 ~ ValidationMessage ~ error:", error);
  return (
    <Text style={[styles.error, { color: error ? Colors.red : Colors.green }]}>
      {error ?? successMessage}
    </Text>
  );
};

export default ValidationMessage;

const styles = StyleSheet.create({
  error: {
    fontFamily: Fonts.DMSans_Regular,
    fontSize: Sizes[12],
    lineHeight: Sizes[18],
  },
});
