import styled from "styled-components/native";

export const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  font-size: 15px;
  font-weight: bold;
`;

export const ItemBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.COLORS.BORDER_COLOR2};
  border-radius: 10px;
  width: 100%;
`;
