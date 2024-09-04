import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import { useRouter } from "expo-router";
import DBTouchableOpacity from "../common/DBTouchableOpacity";
import Colors from "@/constants/Colors";
import Constants from "expo-constants";

const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

const AuthHeader = () => {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <View style={styles.container}>
      <DBTouchableOpacity onPress={handleBackPress}>
        <Text style={styles.backText}>Back</Text>
      </DBTouchableOpacity>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark2,
    paddingTop: STATUS_BAR_HEIGHT + 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backText: {
    fontFamily: Fonts.DMSans_SemiBold,
    fontSize: Sizes[16],
    lineHeight: Sizes[20],
    color: Colors.white,
  },
});
