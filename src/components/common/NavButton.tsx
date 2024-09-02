import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useCallback } from "react";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import Colors from "@/constants/Colors";
import { Href, useRouter } from "expo-router";
import DBTouchableOpacity from "./DBTouchableOpacity";

interface Props {
  label?: string;
  email?: boolean;
  href?: Href<string | object>;
  type?: "primary" | "secondary";
  push?: boolean;
  replace?: boolean;
  goBack?: boolean;
}

const NavButton = ({
  email,
  label,
  href,
  type = "primary",
  push,
  replace,
  goBack,
}: Props) => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    if (replace) {
      router.replace(href || "/");
      console.log("Replaced");
    } else if (goBack) {
      console.log("Can go back", router.canGoBack());
      router.canGoBack() && router.back();
      console.log("Went back");
    } else {
      console.log("Pushed");
      router.push(href || "/");
    }
  }, [href, push, replace, goBack]);

  return (
    <DBTouchableOpacity
      debounce
      onPress={handleNavigation}
      style={[
        styles.container,
        {
          backgroundColor: type === "primary" ? Colors.offWhite : Colors.dark,
        },
      ]}
    >
      <View style={styles.iconView}>
        {email ? (
          <Ionicons
            name="mail-sharp"
            size={Sizes[24]}
            color={Colors.offWhite}
          />
        ) : null}
      </View>
      <Text
        style={[
          styles.label,
          { color: type === "primary" ? Colors.black : Colors.offWhite },
        ]}
      >
        {email ? "Continue with Email" : label || ""}
      </Text>
    </DBTouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 30,
    gap: 36,
    backgroundColor: Colors.offWhite,
    borderWidth: 1,
    borderColor: Colors.offWhite,
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
