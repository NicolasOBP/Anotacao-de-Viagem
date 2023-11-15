import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 5px;
  margin-top: 50px;
`;

export const Container2 = styled.View`
  flex: 1;
  padding: 5px;
  margin-top: 50px;
  align-items: center;
`;

export const Box = styled.View`
  width: 90%;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.COLORS.BORDER_COLOR2};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const ContainerBtnModal = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 4px;
`;
