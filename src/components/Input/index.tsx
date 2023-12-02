import React from "react";
import { BoxInput, Label, TextInput } from "./style";
import { Control, Controller } from "react-hook-form";
import { propsHookForm, values } from "../../types/hookForm";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
  control: Control<propsHookForm> | any;
  name: values;
  valor?: string;
};

export default function Input({
  label,
  name,
  control,
  valor,
  ...rest
}: Props) {
  return (
    <BoxInput>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={(value: string) => onChange(value)}
            value={valor ? valor : value}
            {...rest}
          />
        )}
      />
    </BoxInput>
  );
}
