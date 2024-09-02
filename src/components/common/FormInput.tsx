import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import CustomInput from "./CustomInput";
import { InputType } from "@/utils/enums/input";

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
  showError?: boolean;
};

const FormInput = ({
  name,
  type,
  icon,
  control,
  rules,
  showError = true,
}: Props) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules ?? {}}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.container}>
            <CustomInput
              onBlur={onBlur}
              icon={icon}
              type={type}
              onChangeText={onChange}
              value={value}
            />
            {showError && error && <Text>{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {},
});
