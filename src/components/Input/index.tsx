import React from "react";
import { BoxInput, ErrorMessage, Label, TextInput } from "./style";
import { Control, Controller } from "react-hook-form";
import { propsHookForm } from "../../types/hookForm";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
  control: Control<propsHookForm> | any;
  name: string;
  valor?: string;
};

export default function Input({ label, name, control, valor, ...rest }: Props) {
  return (
    <BoxInput>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <TextInput
              onChangeText={(value: string) => field.onChange(value)}
              value={valor ? valor : field.value}
              {...rest}
            />
            <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
          </>
        )}
      />
    </BoxInput>
  );
}
