import React from "react";
import { TextInfo, TextInfoNormal } from "./style";

type Props = {
  label: string;
  value: string;
};

export default function ItemRevisao({ value, label }: Props) {
  return (
    <TextInfo>
      {label} <TextInfoNormal>{value}</TextInfoNormal>
    </TextInfo>
  );
}
