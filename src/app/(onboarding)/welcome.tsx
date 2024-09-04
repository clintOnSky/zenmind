import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Fonts from "@/constants/Fonts";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("@assets/images/welcome.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.textView}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>Clinton</Text>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    gap: 7,
  },
  text: {
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.white,
    fontSize: Sizes[20],
    lineHeight: Sizes[24],
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
