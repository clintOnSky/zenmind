import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  useWatch,
} from "react-hook-form";
import CustomInput from "./CustomInput";
import { InputType } from "@/utils/enums/input";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import Sizes from "@/constants/Sizes";

type Rules = Omit<
  RegisterOptions<FieldValues>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

type Props = {
  name: string;
  icon?: React.ReactElement;
  control: Control<any>;
  type: InputType;
  rules?: Rules;
};

const FormInput = ({ name, type, icon, control, rules }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const watchedValue = useWatch({ control, name });

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules ?? {}}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          const valuesMatch = watchedValue === value;

          return (
            <CustomInput
              icon={icon}
              type={type}
              borderColor={isFocused ? Colors.blue : Colors.white}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
});
