import styled from "styled-components/native";
import { TextInput as RNTextInput } from "react-native";
export const BoxInput = styled.View`
  width: 80%;
  margin-bottom: 4px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  border: 2px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
  padding: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
` as typeof RNTextInput;

export const ErrorMessage = styled.Text`
  color: red;
`;
