import React from "react";
import { EditField, TextInfo } from "./style";
import { View } from "react-native";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { FormTextInputProps } from "@/types/textInput";
import { ErrorMessage } from "../Input/style";

type Props = {
  label: string;
  value?: string;
};

export const ItemRevisao: React.FC<FormTextInputProps<FieldValues> & Props> = ({
  value,
  label,
  control,
  name,
}) => {
  let a: string;
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInfo>{label}</TextInfo>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <EditField
              onChangeText={(value: string) => field.onChange(value)}
              value={field.value}
            />

            {fieldState.error?.message && (
              <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
            )}
          </>
        )}
      />
      <EditField onChangeText={(value: string) => (a = value)} value={value} />
    </View>
  );
};
