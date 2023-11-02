import { View, Text, TextInput } from "react-native";
import React from "react";
import { inputcss } from "./style";

type Props = {
  label: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

export default function Input({ label, setInfo, placeholder }: Props) {
  return (
    <View style={inputcss.boxInput}>
      <Text style={inputcss.label}>{label}</Text>
      <TextInput
        style={inputcss.input}
        onChangeText={setInfo}
        placeholder={placeholder}
      />
    </View>
  );
}
