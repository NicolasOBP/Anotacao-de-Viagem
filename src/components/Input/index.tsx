import { View, Text, TextInput } from "react-native";
import React from "react";
import { inputcss } from "./style";
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
    <View style={inputcss.boxInput}>
      <Text style={inputcss.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={inputcss.input}
            onChangeText={(value) => onChange(value)}
            placeholder={placeholder}
            value={valor ? valor : value}
            editable={disable}
          />
        )}
      />
    </View>
  );
}
