import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withDelay,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { ToastText } from "./style";
import { useToastConfig, useToastDispatch } from "@/context";
import { toastMap } from "./hook/useToastMap";

const DEFAULT_DORATION = 1500;

export const Toast: React.FC = () => {
  const { hideToast } = useToastDispatch();
  const { message, show, type, duration } = useToastConfig();
  const { iconColor, iconName } = toastMap[type];
  const translationY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translationY.value }],
  }));

  useEffect(() => {
    if (!show) return;

    const topValue = 60;

    translationY.value = withSequence(
      withTiming(topValue, { duration: 1000 }),
      withDelay(
        duration ? duration : DEFAULT_DORATION,
        withTiming(topValue * -1, { duration: 1000 }, () => {
          runOnJS(hideToast)();
        })
      )
    );
  }, [show]);

  if (!show) return;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        animatedStyle,
        type === "Error"
          ? styles.error
          : type === "Success"
          ? styles.success
          : styles.warning,
      ]}
    >
      <MaterialIcons name={iconName} size={30} color={iconColor} />
      <ToastText>{message}</ToastText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    top: 0,
    width: "90%",
    padding: 10,
    borderRadius: 18,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

  success: {
    backgroundColor: "#4cde4aca",
    borderColor: "green",
  },
  error: {
    backgroundColor: "#e93a3ad6",
    borderColor: "red",
  },
  warning: {
    backgroundColor: "#ebb2248a",
    borderColor: "orange",
  },
});
