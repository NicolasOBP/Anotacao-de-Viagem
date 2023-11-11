import { View, Text, DeviceEventEmitter, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SHOW_TOAST_MESSAGE } from "../../utils/toast/toastMessage";
import { data } from "../../types/toast";

const colors = {
  danger: "#e11919",
  succes: "#109b08",
};

export default function Toast() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [time, setTime] = useState(3000);

  function onNewToast(data: data) {
    console.log(data);

    setMessage(data.message);
    setMessageType(data.type);
    if (data.time) setTime(data.time);

    setTimeout(() => {
      setMessage("");
    }, time);
  }

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) return null;

  return (
    <View style={toastcss.container}>
      <View style={{ ...toastcss.box, backgroundColor: colors[messageType] }}>
        <Text style={toastcss.text}>{message}</Text>
      </View>
    </View>
  );
}

const toastcss = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    elevation: 1,
    paddingTop: 100,
  },
  box: {
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
