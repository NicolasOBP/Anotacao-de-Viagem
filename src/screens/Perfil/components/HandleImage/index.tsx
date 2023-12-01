import React from "react";
import { Image } from "./style";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  photo: string;
};

export default function HandleImage({ photo }: Props) {
  return (
    <>
      {photo ? (
        <Image source={{ uri: photo }} />
      ) : (
        <Ionicons name="person-circle-outline" size={200} />
      )}
    </>
  );
}
