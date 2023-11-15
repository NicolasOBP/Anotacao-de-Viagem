import React from "react";
import { BoxInput, Label, TextInput } from "./style";
import { Control, Controller } from "react-hook-form";
import { propsHookForm, values } from "../../types/hookForm";

type Props = {
  label: string;
  control: Control<propsHookForm> | any;
  placeholder?: string;
  name: values;
  valor?: string;
  disable?: boolean;
};

export default function Input({
  label,
  placeholder,
  name,
  control,
  valor,
  disable,
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
            placeholder={placeholder}
            value={valor ? valor : value}
            editable={disable}
          />
        )}
      />
    </BoxInput>
  );
}
