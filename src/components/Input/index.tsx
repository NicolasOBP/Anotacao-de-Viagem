import React from "react";
import { BoxInput, ErrorMessage, Label, TextInput } from "./style";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

type Props = {
  label: string;
  valor?: string;
};
export type FormTextInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;

export default function Input<FormType extends FieldValues>({
  label,
  name,
  control,
  valor,
  rules,
  ...rest
}: FormTextInputProps<FormType> & Props) {
  return (
    <BoxInput>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <TextInput
              onChangeText={(value: string) => field.onChange(value)}
              value={valor ? valor : field.value}
              {...rest}
            />
            {fieldState.error?.message && (
              <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
            )}
          </>
        )}
      />
    </BoxInput>
  );
}
