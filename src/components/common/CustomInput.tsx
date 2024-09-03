import {
  StyleSheet,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import Fonts from "@/constants/Fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InputType } from "@/utils/enums/input";
import { validateString } from "@/utils/validate";
import { anyCharacterRegex, emailRegex } from "@/utils/regex";

interface Props extends TextInputProps {
  icon?: React.ReactElement;
  value: string;
  borderColor?: string;
  type?: InputType;
  regexValue?: RegExp;
}

const CustomInput = ({
  icon,
  type,
  borderColor,
  value,
  regexValue,
  ...props
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    const regex: RegExp =
      type === InputType.EMAIL ? emailRegex : regexValue ?? anyCharacterRegex;

    setIsValid(validateString(value, regex));
  }, [value]);

  console.log(isValid);
  return (
    <View
      style={[styles.container, { borderColor: borderColor ?? Colors.white }]}
    >
      {icon ?? (
        <Ionicons
          name={type === InputType.EMAIL ? "mail-sharp" : "lock-closed"}
          size={24}
          color={Colors.white}
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
          />
        </TouchableOpacity>
      ) : (
        <Ionicons
          name={isValid ? "checkmark-circle-outline" : "close-circle-outline"}
          color={!value ? "transparent" : isValid ? Colors.green : Colors.red}
          size={24}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.white,
    paddingTop: 23,
    paddingLeft: 27,
    paddingRight: 7,
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
  },
});
