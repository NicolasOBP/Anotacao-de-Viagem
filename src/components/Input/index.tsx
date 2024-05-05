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

export const Input: React.FC<FormTextInputProps<FieldValues> & Props> = ({
  label,
  name,
  control,
  valor,
  rules,
  ...rest
}) => {
  return (
    <BoxInput>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, formState }) => (
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
};
