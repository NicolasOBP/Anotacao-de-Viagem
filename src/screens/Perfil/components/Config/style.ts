import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 2%;
  right: 90%;
  align-items: center;
`;

export const ConfigBox = styled.View<{ $display?: "none" | "flex" }>`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  width: 200px;
  display: ${(props) => props.$display};
  position: absolute;
  padding: 5%;
  border-radius: 20px;
`;
