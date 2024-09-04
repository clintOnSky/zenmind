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

  return (
    <View
      style={[styles.container, { borderColor: borderColor ?? Colors.white }]}
    >
      {icon ?? (
        <Ionicons
          name={type === InputType.EMAIL ? "mail-sharp" : "lock-closed"}
          size={24}
          style={styles.icon}
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
      ) : type === InputType.PASSWORD || type === InputType.CONFIRM_PASSWORD ? (
        <TextInput
          style={styles.input}
          cursorColor={Colors.white}
          autoCapitalize="none"
          keyboardType={!isVisible ? "default" : "visible-password"}
          secureTextEntry={!isVisible}
          {...props}
          onLayout={(event) => console.log(event.nativeEvent.layout.height)}
        />
      ) : (
        <TextInput style={styles.input} {...props} />
      )}
      {type === InputType.PASSWORD || type === InputType.CONFIRM_PASSWORD ? (
        <TouchableOpacity onPress={toggleVisibility}>
          <Ionicons
            name={!isVisible ? "eye-off-outline" : "eye-outline"}
            color={Colors.white}
            size={24}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <Ionicons
          name={isValid ? "checkmark-circle-outline" : "close-circle-outline"}
          color={!value ? "transparent" : isValid ? Colors.green : Colors.red}
          size={24}
          style={styles.icon}
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
    minHeight: 54,
    gap: 11,
  },
  icon: {
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.DMSans_Regular,
    paddingLeft: 16,
    paddingRight: 7,
    paddingBottom: 12,
    fontSize: Sizes[16],
    color: Colors.white,
    textAlignVertical: "bottom",
    lineHeight: Sizes[18],
  },
});
