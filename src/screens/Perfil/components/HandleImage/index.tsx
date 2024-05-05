import React from "react";
import { Image } from "./style";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  photo: string;
};

export const HandleImage: React.FC<Props> = ({ photo }) => {
  return (
    <>
      {photo ? (
        <Image source={{ uri: photo }} />
      ) : (
        <Ionicons name="person-circle-outline" size={200} />
      )}
    </>
  );
};
