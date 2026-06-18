import React from "react";
import { BoxInput, ErrorMessage, Label, TextInput } from "./style";
import { Controller, FieldValues } from "react-hook-form";
import { FormTextInputProps } from "@/types/textInput";

type Props = {
  label: string;
  valor?: string;
};

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
};
