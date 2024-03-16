import styled from "styled-components/native";

export const ToastContainer = styled.View`
  position: absolute;
  top: 0px;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid green;
  flex-direction: row;
  align-items: center;
  align-self: center;
  background-color: white;
`;

export const ToastText = styled.Text`
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
`;
