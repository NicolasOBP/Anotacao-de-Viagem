import { StyleSheet } from "react-native";

export const globalcss = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "rgb(50, 146, 236)",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },

  textBtn: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  conteinerBtn: {
    backgroundColor: "rgb(11, 68, 121)",
    padding: 10,
    borderRadius: 10,
    borderColor: "rgb(5, 50, 92)",
    borderWidth: 5,
    marginBottom: 10,
  },
  conteinerBtncancel: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    borderColor: "rgb(5, 50, 92)",
    borderWidth: 5,
    marginBottom: 10,
  },
  conteinerBtnconfirma: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    borderColor: "rgb(5, 50, 92)",
    borderWidth: 5,
    marginBottom: 10,
  },
});
