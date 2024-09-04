import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";

type Props = {
  errorMessage?: string;
  successMessage?: string;
  showSuccessMessage?: boolean;
};

const ValidationMessage = ({
  errorMessage,
  successMessage,
  showSuccessMessage,
}: Props) => {
  if (!errorMessage && !showSuccessMessage) return null;
  console.log("🚀 ~ errorMessage:", errorMessage);

  return (
    <Text
      style={[
        styles.message,
        { color: showSuccessMessage ? Colors.green : Colors.red },
      ]}
    >
      {errorMessage ? errorMessage : showSuccessMessage ? successMessage : ""}
    </Text>
  );
};

export default ValidationMessage;

const styles = StyleSheet.create({
  message: {
    fontFamily: Fonts.DMSans_Regular,
    fontSize: Sizes[12],
    lineHeight: Sizes[18],
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: Sizes[18],
  },
});
