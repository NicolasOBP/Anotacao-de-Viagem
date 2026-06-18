import { FieldValues, UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

export type FormTextInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;
