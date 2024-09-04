import { View } from "react-native";
import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import CustomInput from "./CustomInput";
import { InputType } from "@/utils/enums/input";
import Colors from "@/constants/Colors";

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

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules ?? {}}
        render={({ field: { onChange, onBlur, value } }) => (
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
        )}
      />
    </View>
  );
};

export default FormInput;
