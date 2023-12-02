import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamListStack } from "./stack";

type RouteKeys = keyof RootStackParamListStack;
export type PropsNav<RoutName extends RouteKeys> = NativeStackScreenProps<
  RootStackParamListStack,
  RoutName
>;
