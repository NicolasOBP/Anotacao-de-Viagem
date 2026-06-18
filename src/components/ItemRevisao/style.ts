import styled from "styled-components/native";
import { TextInput as RNTextInput } from "react-native";

export const TextInfo = styled.Text`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
`;
export const TextInfoNormal = styled.Text`
  font-weight: normal;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
`;

export const EditField = styled.TextInput`
  font-weight: normal;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
