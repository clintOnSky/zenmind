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
import FlowerIcon from "@/assets/svg/flower";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <ImageBackground
      source={require("@assets/images/onboarding.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.text}>Discover Peace Within</Text>
      <View style={styles.buttonView}>
        <Link href="/auth-options" asChild push>
          <Pressable style={styles.button}>
            <View>
              <FlowerIcon />
            </View>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: Fonts.Lora_SemiBold,
    color: Colors.offWhite,
    fontSize: Sizes[36],
    width: "80%",
    paddingHorizontal: 20,
  },
  buttonView: {
    marginTop: 72,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: Sizes[42] * 2,
    width: Sizes[42] * 2,
    backgroundColor: Colors.offWhite,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes[42],
  },
});
