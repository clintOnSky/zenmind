import {
  StyleSheet,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InputType } from "@/utils/enums/input";

interface Props extends TextInputProps {
  icon?: React.ReactElement;
  type?: InputType;
}

const CustomInput = ({ icon, type, ...props }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <View style={styles.container}>
      {icon ?? (
        <Ionicons
          name={type === InputType.EMAIL ? "mail-sharp" : "lock-closed"}
          size={24}
          color={Colors.white}
          style={{ marginBottom: 16 }}
        />
      )}
      {type === InputType.EMAIL ? (
        <TextInput
          style={styles.input}
          cursorColor={Colors.white}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          {...props}
        />
      ) : type === InputType.PASSWORD ? (
        <TextInput
          style={styles.input}
          cursorColor={Colors.white}
          autoCapitalize="none"
          keyboardType={!isVisible ? "default" : "visible-password"}
          secureTextEntry={!isVisible}
          {...props}
        />
      ) : (
        <TextInput style={styles.input} {...props} />
      )}
      {type === InputType.PASSWORD ? (
        <TouchableOpacity onPress={toggleVisibility}>
          <Ionicons
            name={!isVisible ? "eye-off-outline" : "eye-outline"}
            color={Colors.white}
            size={24}
            style={{ marginBottom: 16 }}
          />
        </TouchableOpacity>
      ) : (
        <Ionicons
          name={"checkmark-circle-outline" || "close-circle-outline"}
          color={Colors.green}
          size={24}
          style={{ marginBottom: 16 }}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderColor: Colors.white,
    // marginHorizontal: 20,
    paddingTop: 23,
    paddingLeft: 27,
    paddingRight: 7,
    // backgroundColor: "red",
    gap: 22,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.DMSans_Regular,
    fontSize: Sizes[16],
    paddingBottom: 16,
    color: Colors.white,
    textAlignVertical: "bottom",
    lineHeight: Sizes[16] * 1.19,
    backgroundColor: "blue",
  },
});
