import styled from "styled-components/native";
import { FlatList as RNFlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  text-align: center;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
`;

export const ContainerBtn = styled.Pressable`
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.BTN};
  flex-direction: row;
  align-items: center;
`;

export const ContainerBtncancel = styled.Pressable`
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.BTN_CANCELA};
`;

export const ContainerBtnconfirma = styled.Pressable`
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.BTN_CONFIRMA};
`;

export const ShareContainer = styled.View`
  align-self: flex-start;
  margin-top: 5px;
`;

export const BoxInfo = styled.View`
  padding: 15px;
  border: 5px solid ${({ theme }) => theme.COLORS.BORDER_COLOR2};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  margin-bottom: 10px;
`;

export const FlatList = styled.FlatList`
  width: 80%;
` as typeof RNFlatList;

export const BoxBtns = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 4px;
`;
