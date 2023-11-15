import styled from "styled-components/native";

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
